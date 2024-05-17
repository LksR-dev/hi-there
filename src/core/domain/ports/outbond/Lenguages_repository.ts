import { Lenguages } from '../../entities/Lenguages';

export interface LenguageRepository {
  save(lenguage: Lenguages): Promise<Lenguages>;
  findByUserId(userId: string): Promise<Lenguages[]>;
  deleteByUserIdAndUserLenguageId(
    userId: string,
    lenguageId: string,
  ): Promise<string>;
}
