import { LoadProjectByIdRepository } from "@/data/protocols/db";
import { LoadProjectById } from "@/domain/usecases";

export class DbLoadProjectById implements LoadProjectById {

    constructor(private readonly loadProjectByIdRepository: LoadProjectByIdRepository) {}

    async load(id: string): Promise<LoadProjectById.Result> {
        return this.loadProjectByIdRepository.load(id)
    }

}