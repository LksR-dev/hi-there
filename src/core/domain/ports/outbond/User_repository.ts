import { User } from '../../entities/User';

export interface UserRepository {
  save(user: User): Promise<User>;
  findById(id: string): Promise<User>;
  update(dataToUpdate: Partial<User>, id: string): Promise<User>;
}
