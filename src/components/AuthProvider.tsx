// src/components/AuthProvider.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, registerRequest } from "../services/auth.service";

type User = { id: string; email: string; firstName?:string; lastName?:string; age?:number };

type AuthContextType = {
  user: User | null;
  token: string | null;
  login: (email:string, password:string) => Promise<void>;
  register: (payload:any) => Promise<void>;
  logout: () => void;
  setUser: (u: User|null) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{children:React.ReactNode}> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const raw = localStorage.getItem("uv_user");
    return raw ? JSON.parse(raw) : null;
  });
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("uv_token"));

  useEffect(()=>{
    if (user) localStorage.setItem("uv_user", JSON.stringify(user));
    else localStorage.removeItem("uv_user");
  }, [user]);

  useEffect(()=>{
    if (token) localStorage.setItem("uv_token", token);
    else localStorage.removeItem("uv_token");
  }, [token]);

  async function login(email:string, password:string) {
    const res:any = await loginRequest({ email, password });
    if (!res) throw new Error("Invalid credentials");
    setToken(res.token);
    setUser(res.user);
  }

  async function register(payload:any) {
    await registerRequest(payload);
    // do not auto-login; redirect to login page
  }

  function logout() {
    setToken(null);
    setUser(null);
    localStorage.removeItem("uv_token");
    localStorage.removeItem("uv_user");
  }

  return <AuthContext.Provider value={{ user, token, login, register, logout, setUser }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
}
