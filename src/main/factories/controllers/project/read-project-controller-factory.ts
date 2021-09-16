import { DbLoadProjectById } from "@/data/usecases";
import { ProjectTypeOrmRepository } from "@/infra/db/typeorm/repositories";
import { ReadProjectController } from "@/presentation/controllers";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

export const makeReadProjectController = async (request: Request, response: Response): Promise<Response> => {
    const loadProjectByIdRepository = getCustomRepository(ProjectTypeOrmRepository)
    const loadProjectById = new DbLoadProjectById(loadProjectByIdRepository)
    const readProjectController = new ReadProjectController(loadProjectById)
    return readProjectController.handle(request, response)
}