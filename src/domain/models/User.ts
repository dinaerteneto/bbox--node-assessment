export interface UserModel {
    id?: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    role: UserRole,
    creationDate: Date,
    currentEvent: UserEvent,
}

export enum UserRole {
    ADMIN = 'ADMIN',
    CLIENT = 'CLIENT',
}
  
export enum UserEvent {
    CREATION = 'CREATION',
    ACCEPTANCE = 'ACCEPTANCE',
    REFUSAL = 'REFUSAL'
}
  