import {
    AddUserRepository,
    LoadUserByEmailRepository,
    LoadUserByIdRepository,
    LoadUsersRepository,
    RemoveUserRepository,
    UpdateUserRepository
} from '@/data/protocols'
import { UserRole, UserEvent } from '@/domain/models';
import { EntityManager, EntityRepository } from 'typeorm'

import User from '../entities/User'

import { v4 as uuidv4 } from 'uuid';
 
@EntityRepository(User)
export class UserTypeOrmRepository implements AddUserRepository,
    LoadUserByEmailRepository,
    LoadUserByIdRepository,
    LoadUsersRepository,
    RemoveUserRepository,
    UpdateUserRepository {

    constructor(private manager: EntityManager) {}

    async add(userData: AddUserRepository.Params): Promise<AddUserRepository.Result> {
        const data = {
            ...userData,
            id: uuidv4(),
            role: UserRole.CLIENT,
            currentEvent: UserEvent.CREATION,
            creationDate: new Date()
        }
        await this.manager.save(User, data)
        return data
    }
    
    async findByEmail(email: string): Promise<LoadUserByEmailRepository.Result | null> {
        const findUser = await this.manager.findOne(User, { where: { email } })
        return findUser || null
    }

    async load(id: string): Promise<LoadUserByIdRepository.Result | null> {
        const user = await this.manager.findOne(User, { where: { id } })
        return user || null
    }

    async loadAll(): Promise<LoadUsersRepository.Result | []> {
        const users = await this.manager.find(User)
        return users || []
    }
    
    async remove(id: string): Promise<RemoveUserRepository.Result> {
        const isDelete = await this.manager.delete(User, id)
        return !!isDelete
    }

    async update(id: string, data: UpdateUserRepository.Params): Promise<UpdateUserRepository.Result> {
        const user = await this.manager.save(User, {...data, id})
        return user || null
    }
}