import { Messages } from '../../entities/Messages';

export interface MessageRepository {
  save(message: Messages): Promise<Messages>;
  findByRoomId(roomId: string): Promise<Messages>;
}
