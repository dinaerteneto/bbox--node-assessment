import { UserModel } from "@/domain/models";

export interface LoadUsers {
    loadAll(): Promise<LoadUsers.Results>
}

export namespace LoadUsers {
    export type Results = UserModel[]
}