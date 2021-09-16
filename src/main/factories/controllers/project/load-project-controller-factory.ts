import { DbLoadProjectById } from "@/data/usecases";
import { ProjectTypeOrmRepository } from "@/infra/db/typeorm/repositories";
import { LoadProjectController } from "@/presentation/controllers";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

export const makeLoadProjectController = async (request: Request, response: Response): Promise<Response> => {
    const loadProjectByIdRepository = getCustomRepository(ProjectTypeOrmRepository)
    const loadProjectById = new DbLoadProjectById(loadProjectByIdRepository)
    const loadProjectController = new LoadProjectController(loadProjectById)
    return loadProjectController.handle(request, response)
}