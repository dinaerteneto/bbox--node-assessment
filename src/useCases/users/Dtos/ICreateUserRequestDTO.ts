import { UserRole, UserEvent } from '../../../entity/User';

export interface ICreateUserRequestDTO {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  password: string,
  role: UserRole,
  creationDate: Date,
  currentEvent: UserEvent,
}