import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // 🔍 Verifica login ao abrir app
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await api.get("/usuarios/verificar-auth", {
        withCredentials: true,
      });

      setUser(res.data.usuario);
    } catch {
      setUser(null);
    }
  };

  const login = (usuario) => {
    setUser(usuario);
  };

  const logout = async () => {
    try {
      await api.post("/usuarios/logout", {}, {
        withCredentials: true,
      });
    } catch (error) {
      console.error("Erro no logout", error);
    }

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