import { LoadProjectsRepository } from "@/data/protocols/db";
import { LoadProjects } from "@/domain/usecases";

export class DbLoadProjects implements LoadProjects {

    constructor(private readonly loadProjectsRepository: LoadProjectsRepository) {}

    async loadAll(): Promise<LoadProjects.Result> {
        return this.loadProjectsRepository.loadAll()
    }

}