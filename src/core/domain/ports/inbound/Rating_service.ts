import { Ratings } from '../../entities/Ratings';

export interface RatingServiceInterface {
  save(rating: Ratings): Promise<Ratings>;
  findByUserId(userId: string): Promise<Ratings[]>;
}
