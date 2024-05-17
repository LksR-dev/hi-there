import { UserRooms } from '../../entities/UserRooms';

export interface UserRoomRepository {
  save(userRooms: UserRooms): Promise<UserRooms>;
  findById(id: string): Promise<UserRooms>;
  findByUserId(userId: string): Promise<UserRooms>;
  deleteByRoomIdAndUserId(userId: string, roomId: string): string;
}
