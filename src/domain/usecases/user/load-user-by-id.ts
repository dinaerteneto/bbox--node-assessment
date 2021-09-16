import { UserModel } from "@/domain/models";

export interface LoadUserById {
    load: (id: string) => Promise<LoadUserById.Result>
}

export namespace LoadUserById {
    export type Result = Omit<UserModel, 'currentEvent'>
}