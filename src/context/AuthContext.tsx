import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { storage, STORAGE_KEYS } from "../lib/storage/storage";
import { AuthContextType, User } from "./types";

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isSharedTransitionCardOpen, setIsSharedTransitionCardOpen] =
    useState(false);
  // const [loading, setLoading] = useState(true); // for hydration status

  const signIn = (userData: User) => {
    setUser(userData);
    storage.set(STORAGE_KEYS.USER, userData);
  };

  const signOut = () => {
    setUser(null);
    storage.remove(STORAGE_KEYS.USER);
  };
  const onSharedTransitionCardOpen = () => {
    setIsSharedTransitionCardOpen(true);
  };
  const onSharedTransitionCardClose = () => {
    setIsSharedTransitionCardOpen(false);
  };

  // const showLoader = () => setLoading(true);
  // const hideLoader = () => setLoading(false);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const storedUser = await storage.get(STORAGE_KEYS.USER);
    if (storedUser) {
      setUser(storedUser);
    }
    // setLoading(false);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isSharedTransitionCardOpen: isSharedTransitionCardOpen,
    // loading,
    signIn,
    signOut,
    onSharedTransitionCardOpen,
    onSharedTransitionCardClose,
    // showLoader,
    // hideLoader,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook for using context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
