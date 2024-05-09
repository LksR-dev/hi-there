import { User } from './User';

enum RoomType {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
}

export class Rooms {
  room_id: string;
  room_type: RoomType;
  room_name: string;
  created_by: User;
  created_at: Date;
}
