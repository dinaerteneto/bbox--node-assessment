import { ProjectModel } from "@/domain/models";

export interface LoadProjectById {
    load(id: string) : Promise<LoadProjectById.Result>
}

export namespace LoadProjectById {
    export type Result = ProjectModel
}