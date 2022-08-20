import { createContext, useContext, useEffect, useState } from "react";

const INITIAL_STATE = JSON.parse(localStorage.getItem("user")) || null;

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(INITIAL_STATE);

  const value = { user, setUser };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
};

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within AuthProvider");
  return context;
}

export { AuthContextProvider, useAuth };
