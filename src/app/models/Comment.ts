import { User } from './User';
import { Dilemma } from './Dilemma';

export interface Comment {
  user: User;
  dilemma: Dilemma;
  author: string;
  commentpicture: string;
  text: string;
  date: Date;
  likes: [any];
}
