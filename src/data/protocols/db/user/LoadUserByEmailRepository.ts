import { UserModel } from "../../../../domain/models/User";

export interface LoadUserByEmailRepository {
    findByEmail (email: string): Promise<UserModel>
}