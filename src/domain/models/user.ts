export type UserModel = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string,
    role: UserRole,
    currentEvent: UserEvent        
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

export namespace UserModel {
    export type Result = {
        id: string,
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        role: UserRole,
        creationDate: Date
    }
}