import { ProjectModel } from "@/domain/models";

export interface AddProject {
    add: (projectData: AddProject.Params) => Promise<AddProject.Result>
}

export namespace AddProject {
    export type Params = ProjectModel
    export type Result = ProjectModel
}