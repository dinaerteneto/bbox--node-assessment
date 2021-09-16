import { LoadUsersRepository } from "@/data/protocols/db";
import { LoadUsers } from "@/domain/usecases";

export class DbLoadUsers implements LoadUsers {

    constructor(private readonly loadUsersRepository: LoadUsersRepository) {}

    async loadAll(): Promise<LoadUsers.Results> {
        return this.loadUsersRepository.loadAll()
    }

}