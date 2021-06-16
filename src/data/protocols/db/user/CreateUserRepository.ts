import { UserModel } from "../../../../domain/models/User";
import { CreateUserModel } from "../../../../domain/usecases/user/CreateUserModel";

export interface CreateUserRepository {
    create (userData: CreateUserModel): Promise<UserModel>
}
  