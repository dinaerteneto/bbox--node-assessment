import { AddProjectRepository, DelProjectRepository, LoadProjectByIdRepository, LoadUserByIdRepository } from "@/data/protocols";
import { EntityRepository, EntityManager } from "typeorm";
import Project from "../entities/Project";
import User from "../entities/User";
import { v4 as uuidv4 } from 'uuid';

@EntityRepository(Project)
export class ProjectTypeOrmRepository implements AddProjectRepository,
    DelProjectRepository,
    LoadProjectByIdRepository {

    constructor(private manager: EntityManager) {}

    async add(projectData: AddProjectRepository.Params): Promise<AddProjectRepository.Result> {
        const user: User = await this.manager.findOne(User, { where: { id: projectData.userId} });
        const data = {
            ...projectData,
            id: uuidv4(),
            owner: user,
            creationDate: new Date(),
        }
        return this.manager.save(Project, data)
    }

    async remove(id: string): Promise<DelProjectRepository.Result> {
        const isDelete = await this.manager.delete(Project, id)
        return !!isDelete
    }

    async load(id: string): Promise<LoadProjectByIdRepository.Result | null> {
        const project = await this.manager.findOne(Project, { where: { id } })
        return project || null
    }

}