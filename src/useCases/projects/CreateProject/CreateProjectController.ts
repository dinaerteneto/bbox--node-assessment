import { CreateProjectUseCase } from './CreateProjectUseCase';
import { Request, Response } from "express";

export class CreateProjectController {

    constructor(private CreateProjectUseCase: CreateProjectUseCase) { }
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { userId, description } = request.body;
        const data = {
            userId,
            description
        }
        try {
            const user = await this.CreateProjectUseCase.execute(data);
            return response.status(201).json(user);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }        
    }

}