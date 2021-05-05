
import Project from '../../../entity/Project';
import { getRepository } from 'typeorm';
import { AppError } from '../../../errors/AppError';

export class GetProjectUseCase {

    async execute(id: string): Promise<Project> {
        const projectRepository = getRepository(Project);
        
        const project: Project = await projectRepository.findOne({ uuid: id });
        if (project) {
            return project;
        } else {
            throw new AppError('Project not found!');
        }
    }
}

