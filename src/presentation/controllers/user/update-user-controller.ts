import { UpdateUser } from "@/domain/usecases/users/update-user";
import { Controller } from "@/presentation/protocols";
import { Request, Response } from "express";

export class UpdateUserController implements Controller {

    constructor (private readonly updateUser:UpdateUser) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params           
            const user = await this.updateUser.update(id, request.body)
            return response.status(200).json(user);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })

        }
    }

}