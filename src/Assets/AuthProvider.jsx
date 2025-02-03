import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const login = useCallback(
    async (email, password) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
       
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
    [auth]
  );

  const logout = useCallback(async () => {
    try {
      await signOut(auth);
     
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }, [auth]);

  const value = useMemo(
    () => ({
      isAuthenticated,
      authLoading,
      login,
      logout,
    }),
    [isAuthenticated, authLoading, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
