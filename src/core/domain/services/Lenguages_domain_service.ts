import { Lenguages } from '../entities/Lenguages';
import { LenguageServiceInterface } from '../ports/inbound/Lenguages_service';
import { LenguageRepository } from '../ports/outbond/Lenguages_repository';

export class LenguageDomainService implements LenguageServiceInterface {
  constructor(private repository: LenguageRepository) {}
  create(lenguage: Lenguages): Promise<Lenguages> {
    return this.repository.save(lenguage);
  }
  findByUserId(userId: string): Promise<Lenguages[]> {
    return this.repository.findByUserId(userId);
  }
  deleteByUserIdAndUserLenguageId(
    userId: string,
    lenguageId: string,
  ): Promise<string> {
    return this.repository.deleteByUserIdAndUserLenguageId(userId, lenguageId);
  }
}
