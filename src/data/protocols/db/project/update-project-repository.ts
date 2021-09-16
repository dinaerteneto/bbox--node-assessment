import { ProjectModel } from "@/domain/models";

export interface UpdateProjectRepository {
    update(id: string, data: UpdateProjectRepository.Params): Promise<UpdateProjectRepository.Result>
}

export namespace UpdateProjectRepository {
    export type Result = ProjectModel
    export type Params = { description: string }
}