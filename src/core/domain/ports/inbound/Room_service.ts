import { Rooms } from '../../entities/Rooms';

export interface RoomServiceInterface {
  save(room: Rooms): Promise<Rooms>;
  findById(id: string): Promise<Rooms>;
}
