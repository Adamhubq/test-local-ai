import { User } from './user.model';

/**
 * Модель отзыва
 */
export interface Review {
  id: string;
  productId: string;
  userId: string;
  user: User;
  rating: number; // от 1 до 5
  title?: string;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  isVerifiedPurchase: boolean;
  helpfulVotes: number;
  totalVotes: number;
}