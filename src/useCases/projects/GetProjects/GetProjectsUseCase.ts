import { getRepository } from 'typeorm';
import Project from '../../../entity/Project';

export class GetProjectsUseCase {

    async execute(): Promise<Project[]> {
        const projectsRepository = getRepository(Project);
        const projects = await projectsRepository.find();

        return projects;
    }   

}