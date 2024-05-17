import { Friendship, FriendshipStatus } from '../../entities/Friendship';

export interface FriendshipRepository {
  save(friendship: Friendship): Promise<Friendship>;
  checkStatusByUsersIds(
    userSenderId: string,
    userReceptorId: string,
  ): Promise<FriendshipStatus>;
}
