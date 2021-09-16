export interface DelUser {
    remove(id: string) : Promise<DelUser.Result>
}

export namespace DelUser {
    export type Result = Boolean
}