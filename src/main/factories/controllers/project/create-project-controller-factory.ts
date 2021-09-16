import { DbAddProject } from "@/data/usecases";
import { ProjectTypeOrmRepository } from "@/infra/db/typeorm/repositories";
import { CreateProjectController } from "@/presentation/controllers";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

export const makeAddProjectController = async (request: Request, response: Response): Promise<Response> => {
    const addProjectRepository = getCustomRepository(ProjectTypeOrmRepository)
    const addProject = new DbAddProject(addProjectRepository)
    const createProjectController = new CreateProjectController(addProject)
    return createProjectController.handle(request, response)
}