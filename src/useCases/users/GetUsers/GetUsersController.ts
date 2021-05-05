import { Request, Response } from "express";
import { GetUsersUseCase } from "./GetUsersUseCase";

export class GetUsersController {
    constructor(private GetUserUseCase: GetUsersUseCase) { }
    
    async handle(request: Request, response: Response): Promise<Response> {
        const users = await this.GetUserUseCase.execute();
        return response.status(200).json(users);
    }
}