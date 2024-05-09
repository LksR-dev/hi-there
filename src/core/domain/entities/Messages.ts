import { Rooms } from './Rooms';
import { User } from './User';

enum MessageType {
  TEXT = 'TEXT',
  VIDEOCALL = 'VIDEOCALL',
  VOICE = 'VOICE',
}

export class Messages {
  messages_id: string;
  room: Rooms;
  sender_id: User;
  message_text: string;
  message_type: MessageType;
  timestamp: Date;
}
