import { User } from './User';

export class Ratings {
  rating_id: string;
  from_user_id: User;
  to_user_id: User;
  rating: number;
  comment: string | null;
  createdAt: Date;
}
