import { DbAddUser } from "@/data/usecases";
import { BcryptAdapter } from "@/infra/criptography";
import { UserTypeOrmRepository } from "@/infra/db/typeorm/repositories";
import { CreateUserController } from "@/presentation/controllers";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

export const makeAddUserController = async (request: Request, response: Response): Promise<Response> => {
    const salt = 12
    const hasher = new BcryptAdapter(salt)
    const userRepository = getCustomRepository(UserTypeOrmRepository)
    const createUser = new DbAddUser(hasher, userRepository, userRepository)
    const controller = new CreateUserController(createUser)
    return controller.handle(request, response)
}