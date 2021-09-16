import { UserModel } from "@/domain/models";

export interface UpdateUserRepository {
    update(id: string, data: UpdateUserRepository.Params): Promise<UpdateUserRepository.Result>
}

export namespace UpdateUserRepository {
    export type Result = UserModel
    export type Params = Omit<UserModel, 'id'>
}