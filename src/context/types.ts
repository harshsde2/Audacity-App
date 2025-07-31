// context/types.ts

export type User = {
  name: string | null;
  email: string;
  photoUrl?: string | null;
};

export type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (userData: User) => void;
  signOut: () => void;
};
