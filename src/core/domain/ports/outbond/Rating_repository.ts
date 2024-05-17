import { Ratings } from '../../entities/Ratings';

export interface RatingRepository {
  save(rating: Ratings): Promise<Ratings>;
  findByUserId(userId: string): Promise<Ratings[]>;
}
