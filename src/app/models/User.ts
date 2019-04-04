export interface User {
  username: string;
  avatar: string;
  email: string;
  password: string;
  date: Date;
  dilemmas: [any];
  completed_dilemmas: [any];
}
