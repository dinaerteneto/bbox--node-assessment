import { DbRemoveProject } from "@/data/usecases";
import { ProjectTypeOrmRepository } from "@/infra/db/typeorm/repositories";
import { DeleteProjectController } from "@/presentation/controllers/project/delete-project-controller";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

export const makeDeleteProjectController = async (request: Request, response: Response): Promise<Response> => {
    const delProjectRepository = getCustomRepository(ProjectTypeOrmRepository)
    const dbRemoveProject = new DbRemoveProject(delProjectRepository)
    const deleteProjectController = new DeleteProjectController(dbRemoveProject)
    return deleteProjectController.handle(request, response)
}