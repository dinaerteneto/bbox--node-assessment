import { DelProject } from "@/domain/usecases";
import { Controller } from "@/presentation/protocols";
import { Request, Response } from "express";

export class DeleteProjectController implements Controller {

    constructor(private readonly delProject:DelProject) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const isRemove = await this.delProject.remove(id)
            return response.status(200).json(isRemove);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

}