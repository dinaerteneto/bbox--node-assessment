import { Request, Response } from "express";
import { AddUser } from "@/domain/usecases";
import { Controller } from "@/presentation/protocols";

export class CreateUserController implements Controller {
    
    constructor(private readonly addUSer: AddUser) { }
    
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const user = await this.addUSer.add(request.body);
            return response.status(201).json(user);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

}