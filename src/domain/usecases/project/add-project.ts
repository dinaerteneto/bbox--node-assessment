import { ProjectModel } from "@/domain/models"
export interface AddProject {
    add: (projectData: AddProject.Params) => Promise<AddProject.Result>
}

export namespace AddProject {
    export type Params = {userId: string, description: string}
    export type Result = ProjectModel
}