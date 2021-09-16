import { UpdateUserRepository } from "@/data/protocols/db";
import { UpdateUser } from "@/domain/usecases";

export class DbUpdateUser implements UpdateUser {

    constructor(private readonly updateUserRepository: UpdateUserRepository) {}
    
    async update(id: string, data:UpdateUser.Params): Promise<UpdateUser.Result> {
        return this.updateUserRepository.update(id, data)
    }

}