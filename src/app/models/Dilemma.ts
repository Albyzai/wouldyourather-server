import { User } from './User';

export interface Dilemma {
  _id: any;
  user: User;
  title: string;
  prefix: string;
  slug: string;
  red: string;
  blue: string;
  red_votes: [any];
  blue_votes: [any];
  red_votes_count: number;
  blue_votes_count: number;
  total_votes: number;
  likes: [any];
  comments: [Comment];
  date: Date;
}
