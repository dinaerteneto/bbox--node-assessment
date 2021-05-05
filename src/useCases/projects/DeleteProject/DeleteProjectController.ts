import { Request, Response } from "express";
import { DeleteProjectUseCase } from "./DeleteProjectUseCase";

export class DeleteProjectController {

    constructor(private DeleteProjectsUseCase: DeleteProjectUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            await this.DeleteProjectsUseCase.execute(id);
            return response.status(204).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

}