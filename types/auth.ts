
export type User = {
  id: string;
  fullName: string;
  email: string;
};

export type AuthState = {
  user: User | null;
  token: string | null;
  loading: boolean;
};

