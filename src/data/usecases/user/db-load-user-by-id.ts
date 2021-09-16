import { LoadUserByIdRepository } from "@/data/protocols/db";
import { LoadUserById } from "@/domain/usecases";

export class DbLoadUserById implements LoadUserById {

    constructor(private readonly loadUserByIdRepository: LoadUserByIdRepository) {}

    async load(id: string): Promise<LoadUserById.Result> {
        return this.loadUserByIdRepository.load(id)
    }

}