export interface DelProject {
    remove(id: string) : Promise<DelProject.Result>
}

export namespace DelProject {
    export type Result = Boolean
}