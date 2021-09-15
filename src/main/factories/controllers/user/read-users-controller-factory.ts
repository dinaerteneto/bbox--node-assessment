import { DbLoadUsers } from "@/data/usecases/user/db-load-users";
import { UserTypeOrmRepository } from "@/infra/db/typeorm/repositories";
import { ReadUsersController } from "@/presentation/controllers";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

export const makeReadUsersController = async (request: Request, response: Response): Promise<Response> => {
    const loadUsersRepository = getCustomRepository(UserTypeOrmRepository)
    const loadUsers = new DbLoadUsers(loadUsersRepository)
    const readUsersControllers = new ReadUsersController(loadUsers)
    return readUsersControllers.handle(request, response)
}