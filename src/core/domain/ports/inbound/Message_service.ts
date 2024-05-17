import { Messages } from '../../entities/Messages';

export interface MessageServiceInterface {
  create(message: Messages): Promise<Messages>;
  findByRoomId(roomId: string): Promise<Messages>;
}
