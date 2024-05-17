import { Friendship, FriendshipStatus } from '../entities/Friendship';
import { FriendshipServiceInterface } from '../ports/inbound/Friendship_service';
import { FriendshipRepository } from '../ports/outbond/Friendship_repository';

export class FriendshipDomainService implements FriendshipServiceInterface {
  constructor(private repository: FriendshipRepository) {}

  create(friendship: Friendship): Promise<Friendship> {
    return this.repository.save(friendship);
  }
  checkStatusByUsersIds(
    userSenderId: string,
    userReceptorId: string,
  ): Promise<FriendshipStatus> {
    return this.repository.checkStatusByUsersIds(userSenderId, userReceptorId);
  }
}
