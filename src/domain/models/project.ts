import { UserModel } from ".";

export type ProjectModel = {
    id: string,
    description: string,
    owner: UserModel
    creationDate: Date
}