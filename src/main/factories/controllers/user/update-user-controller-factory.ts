import { DbUpdateUser } from "@/data/usecases";
import { UserTypeOrmRepository } from "@/infra/db/typeorm/repositories";
import { UpdateUserController } from "@/presentation/controllers/user/update-user-controller";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

export const makeUpdateUserController = async (request: Request, response: Response): Promise<Response> => {
    const updateUserRepository = getCustomRepository(UserTypeOrmRepository)
    const updateUser = new DbUpdateUser(updateUserRepository)
    const updateUserController = new UpdateUserController(updateUser)
    return updateUserController.handle(request, response)
}