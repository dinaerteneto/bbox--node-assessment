import { v4 as uuidv4 } from 'uuid';
import { ICreateProjectRequestDTO } from "../Dtos/ICreateProjectRequestDTO";
import { UserRepository } from '../../../repositories/UsersRepository';
import { getCustomRepository, getRepository } from 'typeorm';
import Project from "../../../entity/Project";
import User from "../../../entity/User";


export class CreateProjectUseCase {

    async execute(data: ICreateProjectRequestDTO): Promise<Project> {
        const projectRepository = getRepository(Project);
        const userRepository = getCustomRepository(UserRepository);
        const owner: User = await userRepository.findOne({ uuid: data.userId });
        const uuid = uuidv4();
        const project = projectRepository.create({ ...data, uuid, owner, creationDate: new Date() });
        await projectRepository.save(project);

        return project || null;
    }

}