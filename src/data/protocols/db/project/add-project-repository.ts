import { ProjectModel } from "@/domain/models"

export interface AddProjectRepository {
    add(data: AddProjectRepository.Params) : Promise<AddProjectRepository.Result>
}

export namespace AddProjectRepository {
    export type Params = {
        userId: string,
        description: string
    }
    export type Result = ProjectModel
}