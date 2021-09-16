import { Hasher } from "@/data/protocols/criptography";
import { AddUserRepository, LoadUserByEmailRepository } from "@/data/protocols/db";
import { UserEvent, UserRole } from "@/domain/models";
import { AddUser } from "@/domain/usecases";

export class DbAddUser implements AddUser {

    constructor(
        private readonly hasher: Hasher,
        private readonly addUserRepository: AddUserRepository,
        private readonly loadUserByEmailRepository: LoadUserByEmailRepository
    ) { }

    async add(data: AddUser.Params): Promise<AddUser.Result> {
        const user = await this.loadUserByEmailRepository.findByEmail(data.email)
        let newUser: AddUser.Result = null
        if (!user) {
            const hashedPassword = await this.hasher.hash(data.password)
            const userData = {
                ...data,
                password: hashedPassword,
                role: UserRole.CLIENT,
                creationDate: new Date,
                currentEvent: UserEvent.CREATION
            }
            newUser = await this.addUserRepository.add(userData)
        }
        return newUser
    }

}