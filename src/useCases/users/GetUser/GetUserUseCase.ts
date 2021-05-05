
import User from '../../../entity/User';
import { getRepository } from 'typeorm';
import { AppError } from '../../../errors/AppError';

export class GetUserUseCase {

    async execute(id: string): Promise<User> {
        const usersRepository = getRepository(User);
        
        const user: User = await usersRepository.findOne({ uuid: id });
        if (user) {
            return user;
        } else {
            throw new AppError('User not found!');
        }
    }
}

