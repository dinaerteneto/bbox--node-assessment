import { Request, Response } from "express";
import { LoadUserById } from "@/domain/usecases";
import { Controller } from "@/presentation/protocols";

export class ReadUserController implements Controller {
    
    constructor(private readonly loadUserById: LoadUserById) { }
    
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params
            const user = await this.loadUserById.load(id);
            return response.status(201).json(user);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

}