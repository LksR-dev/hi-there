import { Ratings } from '../../entities/Ratings';

export interface RatingServiceInterface {
  create(rating: Ratings): Promise<Ratings>;
  findByUserId(userId: string): Promise<Ratings[]>;
}
