import { Friendship, FriendshipStatus } from '../../entities/Friendship';

export interface FriendshipServiceInterface {
  create(friendship: Friendship): Promise<Friendship>;
  checkStatusByUsersIds(
    userSenderId: string,
    userReceptorId: string,
  ): Promise<FriendshipStatus>;
}
