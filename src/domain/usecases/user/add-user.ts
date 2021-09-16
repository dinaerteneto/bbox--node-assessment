import { UserModel } from '@/domain/models'

export interface AddUser {
    add: (user: AddUser.Params) => Promise<AddUser.Result>
}

export namespace AddUser {
    export type Params = UserModel
    export type Result = Omit<UserModel, 'password'>
}