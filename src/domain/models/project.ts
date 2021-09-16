import { UserModel } from './user'
export namespace ProjectModel  {
    export type Params = {
        description: string,
        userId: string
    }

    export type Result = {
        id: string,
        description: string,
        creationDate: Date,
        owner: UserModel.Result
    }
}