import { UserModel } from "@/domain/models";

export interface LoadUserByIdRepository {
    load(id: string): Promise<LoadUserByIdRepository.Result>
}

export namespace LoadUserByIdRepository {
    export type Result = UserModel
}