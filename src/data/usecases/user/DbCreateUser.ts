
import { UserModel } from "../../../domain/models/User";
import { CreateUser, CreateUserModel } from "../../../domain/usecases/user/CreateUserModel";
import { Hasher } from "../../protocols/criptography/hasher";
import { CreateUserRepository } from "../../protocols/db/user/CreateUserRepository";
import { LoadUserByEmailRepository } from "../../protocols/db/user/LoadUserByEmailRepository";

export class DbCreateUser implements CreateUser {
    constructor(
        private readonly hasher: Hasher,
        private readonly createUserRepository: CreateUserRepository,
        private readonly loadUserByEmailRepository: LoadUserByEmailRepository
    ) { }

    async create(userData: CreateUserModel): Promise<UserModel> {
        const userAlreadyExists = await this.loadUserByEmailRepository.findByEmail(userData.email);
        if (!userAlreadyExists) {
            const hashedPassword = await this.hasher.hash(userData.password)
            const newAccount = await this.createUserRepository.create(Object.assign({}, userData, { password: hashedPassword }))
            return newAccount
        }       
        return null;
    }
}