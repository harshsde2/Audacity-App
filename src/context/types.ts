// context/types.ts

export type User = {
  name: string;
  email: string;
  photoUrl?: string;
};

export type AuthContextType = {
  user: User | null | Object;
  isAuthenticated: boolean;
  loading: boolean;
  signIn: (userData: User) => void;
  signOut: () => void;
  showLoader: () => void;
  hideLoader: () => void;
};
