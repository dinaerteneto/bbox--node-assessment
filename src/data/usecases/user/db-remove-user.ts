import { RemoveUserRepository } from "@/data/protocols/db";
import { DelUser } from "@/domain/usecases";

export class DbRemoveUser implements DelUser {

    constructor(private readonly removeUserRepository: RemoveUserRepository) {}

    async remove(id: string): Promise<DelUser.Result> {
        return this.removeUserRepository.remove(id)
    }

}