import { DbRemoveUser } from '@/data/usecases/user/db-remove-user'
import { UserTypeOrmRepository } from '@/infra/db/typeorm/repositories'
import { DeleteUserController } from '@/presentation/controllers'
import {Request, Response} from 'express'
import { getCustomRepository } from 'typeorm'

export const makeDeleteUserController = async (request: Request, response: Response): Promise<Response> => {
    const removeUserRepository = getCustomRepository(UserTypeOrmRepository)
    const delUser = new DbRemoveUser(removeUserRepository)
    const deleteUserController = new DeleteUserController(delUser)
    return deleteUserController.handle(request, response)
}