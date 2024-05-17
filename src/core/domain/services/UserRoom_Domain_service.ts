import { UserRooms } from '../entities/UserRooms';
import { UserRoomInterface } from '../ports/inbound/UserRoom_service';
import { UserRoomRepository } from '../ports/outbond/UserRoom_repository';

export class UserRoomDomainService implements UserRoomInterface {
  constructor(private repository: UserRoomRepository) {}
  create(userRooms: UserRooms): Promise<UserRooms> {
    return this.repository.save(userRooms);
  }
  findById(id: string): Promise<UserRooms> {
    return this.repository.findById(id);
  }
  findByUserId(userId: string): Promise<UserRooms> {
    return this.findByUserId(userId);
  }
  deleteByRoomIdAndUserId(userId: string, roomId: string): string {
    return this.deleteByRoomIdAndUserId(userId, roomId);
  }
}
