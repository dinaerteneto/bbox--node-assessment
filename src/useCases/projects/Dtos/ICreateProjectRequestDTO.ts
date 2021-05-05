import User from '../../../entity/User';

export interface ICreateProjectRequestDTO {
  userId: string,
  description: string,
}