import { v4 as uuidv4 } from 'uuid';
import { ICreateUserRequestDTO } from '../Dtos/ICreateUserRequestDTO';
import User from '../../../entity/User';
import { UserRepository } from '../../../repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';
import { AppError } from '../../../errors/AppError';


export class CreateUserUseCase {

    async execute(data: ICreateUserRequestDTO): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);
        const userAlreadyExists = await userRepository.findByEmail(data.email);
        if (userAlreadyExists) {
          throw new AppError('User already exists.');
        }
        const uuid = uuidv4();
        const user = userRepository.create({...data, uuid});
        await userRepository.save(user);

        return user || null;
        
    }
}

