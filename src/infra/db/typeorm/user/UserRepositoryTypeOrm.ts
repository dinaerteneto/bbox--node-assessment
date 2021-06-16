import { v4 as uuidv4 } from 'uuid';
import { getCustomRepository } from "typeorm";
import { CreateUserRepository } from "../../../../data/protocols/db/user/CreateUserRepository";
import { UserEvent, UserModel, UserRole } from "../../../../domain/models/User";
import { CreateUserModel } from "../../../../domain/usecases/user/CreateUserModel";
import { LoadUserByEmailRepository } from '../../../../data/protocols/db/user/LoadUserByEmailRepository';
import { UserRepository } from '../repositories/UserRepository';

export class UserRepositoryTypeOrm implements CreateUserRepository, LoadUserByEmailRepository {
    
    private readonly repository:UserRepository;

    constructor() {
        this.repository = getCustomRepository(UserRepository);
    }

    async create (userData: CreateUserModel): Promise<UserModel> {
        const data = {
            ...userData,
            id: uuidv4(),
            role: UserRole.CLIENT,
            currentEvent: UserEvent.CREATION,
            creationDate: new Date()
        }
        const user = this.repository.create(data);
        await this.repository.save(user);
        return data
    }

    async findByEmail(email: string): Promise<UserModel | null> {
        const findUser = await this.repository.findOne({ where: { email } })
        return findUser || null;
    }
}


