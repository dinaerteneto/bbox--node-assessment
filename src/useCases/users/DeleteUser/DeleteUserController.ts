import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {

    constructor(private DeleteUserUseCase: DeleteUserUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;
            await this.DeleteUserUseCase.execute(id);
            return response.status(204).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

}