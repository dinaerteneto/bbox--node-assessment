import { UserModel } from "@/domain/models";

export interface UpdateUser {
    update(id: string, data:UpdateUser.Params) : Promise<UpdateUser.Result>
}

export namespace UpdateUser {
    export type Result = UserModel
    export type Params = Omit<UserModel, 'id'>
}