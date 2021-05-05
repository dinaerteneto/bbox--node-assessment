
import Project from '../../../entity/Project';
import { getRepository } from 'typeorm';
import { AppError } from '../../../errors/AppError';

export class DeleteProjectUseCase {

    async execute(id: string): Promise<void> {
        const projectRepository = getRepository(Project);
        
        const project: Project = await projectRepository.findOne({ uuid: id });
        if (project) {
            projectRepository.delete(project);
        } else {
            throw new AppError('Project not found!');
        }
    }
}

