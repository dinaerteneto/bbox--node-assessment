import { DbLoadProjects } from "@/data/usecases";
import { ProjectTypeOrmRepository } from "@/infra/db/typeorm/repositories";
import { ReadProjectsController } from "@/presentation/controllers";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

export const makeReadProjectsController = async (request: Request, response: Response): Promise<Response> => {
    const loadProjectsRepository = getCustomRepository(ProjectTypeOrmRepository)
    const loadProjects = new DbLoadProjects(loadProjectsRepository)
    const readProjectController = new ReadProjectsController(loadProjects)
    return readProjectController.handle(request, response)
}