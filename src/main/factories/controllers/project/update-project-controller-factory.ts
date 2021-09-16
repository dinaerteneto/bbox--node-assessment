import { DbUpdateProject } from "@/data/usecases/project/db-update-project";
import { ProjectTypeOrmRepository } from "@/infra/db/typeorm/repositories";
import { UpdateProjectController } from "@/presentation/controllers";
import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";

export const makeUpdateProjectController = async (request: Request, response: Response): Promise<Response> => {
    const updateProjectRepository = getCustomRepository(ProjectTypeOrmRepository)
    const updateProject = new DbUpdateProject(updateProjectRepository)
    const updateProjectController = new UpdateProjectController(updateProject)
    return updateProjectController.handle(request, response)
}