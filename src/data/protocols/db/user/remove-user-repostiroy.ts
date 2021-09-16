export interface RemoveUserRepository {
    remove(id: string): Promise<RemoveUserRepository.Result>
}

export namespace RemoveUserRepository {
    export type Result = Boolean
}