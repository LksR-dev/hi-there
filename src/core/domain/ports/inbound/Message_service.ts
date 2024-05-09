import { Messages } from '../../entities/Messages';

export interface MessageServiceInterface {
  save(message: Messages): Promise<Messages>;
  findByRoomId(roomId: string): Promise<Messages>;
}
