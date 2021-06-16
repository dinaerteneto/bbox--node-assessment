import { UserEvent, UserModel, UserRole } from "../../models/User";

export interface CreateUserModel {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    role: UserRole,
    currentEvent: UserEvent
  }

export interface CreateUser {
    create (user: CreateUserModel): Promise<UserModel>
}