import { Request, Response } from "express";
import { CreateUser } from "../../../domain/usecases/user/CreateUserModel";

export class CreateUserController {
    
    constructor(private readonly createUser: CreateUser) { }
    
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const user = await this.createUser.create(request.body);
            return response.status(201).json(user);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

}