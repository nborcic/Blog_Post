import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    //console.log("Current token state", localStorage.getItem("token"));
    return localStorage.getItem("token") !== null;
  });
  const [guser, setGuser] = useState("");

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);

      setGuser(user);
    } else {
      setGuser("");
    }
  });

  const login = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
    return;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      future={{ v7_partialHydration: true }}
      value={{ isAuthenticated, login, logout, guser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
