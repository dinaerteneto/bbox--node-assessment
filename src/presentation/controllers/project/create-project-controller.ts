import { AddProject } from "@/domain/usecases";
import { Controller } from "@/presentation/protocols";
import { Request, Response } from "express";

export class CreateProjectController implements Controller {

    constructor(private readonly addProject:AddProject) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const user = await this.addProject.add(request.body);
            return response.status(201).json(user);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }


}