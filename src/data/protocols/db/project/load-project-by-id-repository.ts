import { ProjectModel } from "@/domain/models";

export interface LoadProjectByIdRepository {
    load(id: string): Promise<LoadProjectByIdRepository.Result>
}

export namespace LoadProjectByIdRepository {
    export type Result = ProjectModel
}