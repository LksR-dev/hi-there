import { Rooms } from '../../entities/Rooms';

export interface RoomRepository {
  save(room: Rooms): Promise<Rooms>;
  findById(id: string): Promise<Rooms>;
}
