import { Request, Response } from "express";
import { GetProjectUseCase } from "./GetProjectUseCase";

export class GetProjectController {

    constructor(private GetProjectUseCase: GetProjectUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            const project = await this.GetProjectUseCase.execute(id);
            return response.status(200).json(project);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

}