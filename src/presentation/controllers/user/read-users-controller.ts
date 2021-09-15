import { LoadUsers } from "@/domain/usecases";
import { Controller } from "@/presentation/protocols";
import { Request, Response } from "express";

export class ReadUsersController implements Controller {

    constructor(private readonly loadUsers:LoadUsers) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const users = await this.loadUsers.loadAll()
            return response.status(201).json(users);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }

}