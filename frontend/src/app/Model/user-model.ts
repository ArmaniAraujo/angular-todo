export interface User {
  name: string;
  username: string;
  hashed_password: string;
  salt: string;
  email: string;
  userImage: string | null;
};
