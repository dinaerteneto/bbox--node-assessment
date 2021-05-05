import { UserRole, UserEvent } from "../../entity/User";
import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(private CreateUserUserCase: CreateUserUseCase){}
    
    async handle(request: Request, response: Response): Promise<Response> {

        const { firstName, lastName, email, phoneNumber, password } = request.body;

        const data = {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,            
            role: UserRole.CLIENT,
            creationDate: new Date(),
            currentEvent: UserEvent.CREATION
        }

        try {
            const user = await this.CreateUserUserCase.execute(data);
            return response.status(201).json(user);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}