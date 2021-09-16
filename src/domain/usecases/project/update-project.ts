import { ProjectModel } from "@/domain/models";

export interface UpdateProject {
    update(id: string, dataProject: UpdateProject.Params) : Promise<UpdateProject.Result>
}

export namespace UpdateProject {
    export type Result = ProjectModel
    export type Params = Omit<ProjectModel, 'userId'>
}