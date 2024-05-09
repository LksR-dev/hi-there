import { User } from './User';

enum LenguagesEnum {
  AR = 'Arabic',
  ZH = 'Chinese',
  NL = 'Dutch',
  EN = 'English',
  FR = 'French',
  DE = 'German',
  HI = 'Hindi',
  IT = 'Italian',
  JA = 'Japanese',
  KO = 'Korean',
  PT = 'Portuguese',
  RU = 'Russian',
  ES = 'Spanish',
}

export class Lenguages {
  lenaguage_id: string;
  user: User;
  lenguage: keyof typeof LenguagesEnum;
}
