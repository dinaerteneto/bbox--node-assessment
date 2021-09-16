import { UpdateProject } from "@/domain/usecases";
import { Controller } from "@/presentation/protocols";
import { Request, Response } from "express";

export class UpdateProjectController implements Controller {

    constructor (private readonly updateProject:UpdateProject) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params           
            const user = await this.updateProject.update(id, request.body)
            return response.status(200).json(user);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })

        }
    }

}