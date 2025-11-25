// src/pages/login.tsx (replace)
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthProvider";
import "../styles/login.sass";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e:any) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      await login(email, password);
      nav("/home");
    } catch (error:any) {
      setErr(error.message || "Login failed");
    } finally { setLoading(false); }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="/images/uvmeet-removebg-preview.png" alt="UVMeet Logo" className="login-logo" />
        <h2 className="login-title">Tu plataforma de videollamadas favorita</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username">Usuario (email)</label>
          <input id="username" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          {err && <p className="login-error" role="alert">{err}</p>}
          <button type="submit" className="login-button">{loading ? "Signing in..." : "Iniciar sesión"}</button>
          <p className="forgot-link">¿Problemas al acceder a su cuenta? <a href="/forgot">Recuperar</a></p>
          <p className="ressetpasword-link">¿Olvido su contraseña <a href="/ressetpasword">Cambiar</a></p>
        </form>
        <p className="login-footer">¿No tiene cuenta? <a href="/register">Regístrate</a></p>
      </div>
    </div>
  );
}
