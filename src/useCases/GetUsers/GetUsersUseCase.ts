import { getRepository } from 'typeorm';
import User from '../../entity/User';

export class GetUsersUseCase {

    async execute(): Promise<User[]> {
        const usersRepository = getRepository(User);
        const users = await usersRepository.find();

        return users;
    }   

}