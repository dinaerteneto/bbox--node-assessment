import { UserModel } from "@/domain/models";

export interface LoadUsers {
    loadAll() : Promise<LoadUsers.Result>
}

export namespace LoadUsers {
    export type Result = UserModel[]
}