import { Request, Response } from "express"
import { Controller } from "@/presentation/protocols";
import { DbLoadProjects } from "@/data/usecases";

export class ReadProjectsController implements Controller {

    constructor(private loadProjects: DbLoadProjects) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const project = await this.loadProjects.loadAll()
            return response.status(200).json(project);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}