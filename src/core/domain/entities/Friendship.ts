import { User } from './User';

enum FriendshipStatus {
  ACEPTED = 'ACEPTED',
  DECLINED = 'DECLINED',
  PENDING = 'PENDING',
}

export class Friendship {
  friendship_id: string;
  sent_by: User;
  received_by: User;
  status: FriendshipStatus;
  createdAt: Date;
}
