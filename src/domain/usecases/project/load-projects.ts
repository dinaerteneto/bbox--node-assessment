import { ProjectModel } from "@/domain/models";

export interface LoadProjects {
    loadAll(): Promise<LoadProjects.Result>
}

export namespace LoadProjects {
    export type Result = ProjectModel[]
}