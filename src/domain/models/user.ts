export type UserModel = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    role: UserRole,
    currentEvent: UserEvent,
    creationDate: Date
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