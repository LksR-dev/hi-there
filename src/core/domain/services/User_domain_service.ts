import { User } from '../entities/User';
import { UserServiceInterface } from '../ports/inbound/User_service';
import { UserRepository } from '../ports/outbond/User_repository';

export class UserDomainService implements UserServiceInterface {
  constructor(private repository: UserRepository) {}

  create(user: User): Promise<User> {
    const newUser = User.create(user);
    return this.repository.save(newUser);
  }

  findById(id: string): Promise<User> {
    return this.repository.findById(id);
  }

  update(dataToUpdate: Partial<User>, id: string): Promise<User> {
    return this.repository.update(dataToUpdate, id);
  }
}
