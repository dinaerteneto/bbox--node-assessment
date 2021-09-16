import { RemoveUserRepository } from "@/data/protocols/db";
import { DelProject } from "@/domain/usecases";

export class DbRemoveProject implements DelProject {

    constructor(private readonly removeUserRepository: RemoveUserRepository) {}

    async remove(id: string): Promise<DelProject.Result> {
        return this.removeUserRepository.remove(id)
    }

}