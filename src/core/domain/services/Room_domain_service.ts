import { Rooms } from '../entities/Rooms';
import { RoomServiceInterface } from '../ports/inbound/Room_service';
import { RoomRepository } from '../ports/outbond/Room_repository';

export class RoomDomainService implements RoomServiceInterface {
  constructor(private repository: RoomRepository) {}
  create(room: Rooms): Promise<Rooms> {
    return this.repository.save(room);
  }
  findById(id: string): Promise<Rooms> {
    return this.repository.findById(id);
  }
}
