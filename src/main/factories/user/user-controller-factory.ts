import { Request, Response } from "express";
import { DbCreateUser } from "../../../data/usecases/user/DbCreateUser";
import { BcryptAdapter } from "../../../infra/criptography/bcrypt-adapter/bcrypt-adapter";
import { UserRepositoryTypeOrm } from "../../../infra/db/typeorm/user/UserRepositoryTypeOrm";
import { CreateUserController } from "../../../presentation/controllers/user/CreateUserController";

export const makeCreateUserController = async (request: Request, response: Response): Promise<Response> => {
    const salt = 12
    const hasher = new BcryptAdapter(salt)
    const userRepository = new UserRepositoryTypeOrm()
    const createUser = new DbCreateUser(hasher, userRepository, userRepository)
    const controller = new CreateUserController(createUser)
    return controller.handle(request, response)
}