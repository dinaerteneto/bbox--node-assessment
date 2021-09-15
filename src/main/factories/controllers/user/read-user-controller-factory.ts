import { DbLoadUserById } from "@/data/usecases";
import { UserTypeOrmRepository } from "@/infra/db/typeorm/repositories";
import { ReadUserController } from "@/presentation/controllers";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

export const makeReadUserController = async (request: Request, response: Response): Promise<Response> => {
    const userRepository = getCustomRepository(UserTypeOrmRepository)
    const loadUserById = new DbLoadUserById(userRepository)
    const controller = new ReadUserController(loadUserById)
    return controller.handle(request, response)
}