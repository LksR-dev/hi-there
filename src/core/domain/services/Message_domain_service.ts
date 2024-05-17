import { Messages } from '../entities/Messages';
import { MessageServiceInterface } from '../ports/inbound/Message_service';
import { MessageRepository } from '../ports/outbond/Message_service';

export class MessageDomainService implements MessageServiceInterface {
  constructor(private repository: MessageRepository) {}
  create(message: Messages): Promise<Messages> {
    return this.repository.save(message);
  }
  findByRoomId(roomId: string): Promise<Messages> {
    return this.repository.findByRoomId(roomId);
  }
}
