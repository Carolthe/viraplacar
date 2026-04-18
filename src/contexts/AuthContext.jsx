import { createContext, useContext, useState, useEffect, useRef } from "react";
import api from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const tokenRef = useRef(null);

  useEffect(() => {
    const interceptor = api.interceptors.request.use((config) => {
      if (tokenRef.current) {
        config.headers.Authorization = `Bearer ${tokenRef.current}`;
      }
      return config;
    });

    return () => api.interceptors.request.eject(interceptor);
  }, []);

  const login = (usuario, token) => {
    tokenRef.current = token;
    setUser(usuario);
  };

  const logout = () => {
    tokenRef.current = null;
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}