import { Rooms } from '../../entities/Rooms';

export interface RoomServiceInterface {
  create(room: Rooms): Promise<Rooms>;
  findById(id: string): Promise<Rooms>;
}
