import { AddProjectRepository } from "@/data/protocols/db";
import { AddProject } from "@/domain/usecases";

export class DbAddProject implements AddProject {

    constructor( private readonly addProjectRepository: AddProjectRepository) { }

    async add(data: AddProject.Params): Promise<AddProject.Result> {
        return this.addProjectRepository.add(data)
    }

}