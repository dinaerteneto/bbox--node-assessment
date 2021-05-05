import { Request, Response } from "express";
import { GetProjectsUseCase } from "./GetProjectsUseCase";

export class GetProjectsController {
    constructor(private GetProjectsUseCase: GetProjectsUseCase) { }
    
    async handle(request: Request, response: Response): Promise<Response> {
        const Projects = await this.GetProjectsUseCase.execute();
        return response.status(200).json(Projects);
    }
}