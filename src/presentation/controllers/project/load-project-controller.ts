import { Request, Response } from "express"
import { DbLoadProjectById } from "@/data/usecases";
import { Controller } from "@/presentation/protocols";

export class LoadProjectController implements Controller {

    constructor(private loadProjectById: DbLoadProjectById) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const project = await this.loadProjectById.load(id)
            return response.status(200).json(project);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}