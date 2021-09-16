import { AddProjectRepository } from "@/data/protocols";
import { EntityRepository, EntityManager } from "typeorm";
import Project from "../entities/Project";
import User from "../entities/User";
import { v4 as uuidv4 } from 'uuid';

@EntityRepository(Project)
export class ProjectTypeOrmRepository implements AddProjectRepository {

    constructor(private manager: EntityManager) {}

    async add(projectData: AddProjectRepository.Params): Promise<AddProjectRepository.Result> {
        const user: User = await this.manager.findOne(User, { where: { id: projectData.userId} });
        const data = {
            ...projectData,
            id: uuidv4(),
            owner: user,
            creationDate: new Date(),
        }
        await this.manager.save(Project, data)
        return projectData
    }

}