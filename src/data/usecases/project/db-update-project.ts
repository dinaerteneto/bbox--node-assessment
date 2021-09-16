import { UpdateProjectRepository } from "@/data/protocols/db";
import { UpdateProject } from "@/domain/usecases";

export class DbUpdateProject implements UpdateProject {

    constructor(private readonly updateProjectRepository: UpdateProjectRepository) {}
    
    async update(id: string, data:UpdateProject.Params): Promise<UpdateProject.Result> {
        return this.updateProjectRepository.update(id, data)
    }

}