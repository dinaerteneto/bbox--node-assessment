import { UserModel } from "@/domain/models";

export interface AddUserRepository {
    add(data: AddUserRepository.Params): Promise<AddUserRepository.Result>
}

export namespace AddUserRepository {
    export type Params = UserModel
    export type Result = UserModel
}