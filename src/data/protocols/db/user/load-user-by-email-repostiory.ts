import { UserModel } from "@/domain/models";

export interface LoadUserByEmailRepository {
    findByEmail(email: string) : Promise<LoadUserByEmailRepository.Result>
}

export namespace LoadUserByEmailRepository {
    export type Result = UserModel
}