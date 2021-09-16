export interface RemoveProjectRepository {
    remove(id: string): Promise<RemoveProjectRepository.Result>
}

export namespace RemoveProjectRepository {
    export type Result = Boolean
}