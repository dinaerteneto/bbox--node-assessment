
import User from '../../entity/User';
import { getRepository } from 'typeorm';
import { AppError } from '../../errors/AppError';

export class DeleteUserUseCase {

    async execute(id: string): Promise<void> {
        const usersRepository = getRepository(User);
        
        const user: User = await usersRepository.findOne({ uuid: id });
        if (user) {
            usersRepository.delete(user);
        } else {
            throw new AppError('User not found!');
        }
    }
}

