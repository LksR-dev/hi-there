import { Ratings } from '../entities/Ratings';
import { RatingServiceInterface } from '../ports/inbound/Rating_service';
import { RatingRepository } from '../ports/outbond/Rating_repository';

export class RatingDomainService implements RatingServiceInterface {
  constructor(private repository: RatingRepository) {}
  create(rating: Ratings): Promise<Ratings> {
    return this.repository.save(rating);
  }
  findByUserId(userId: string): Promise<Ratings[]> {
    return this.repository.findByUserId(userId);
  }
}
