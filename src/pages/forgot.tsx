import { useState, type JSX } from "react";
import "../styles/forgot.sass";

/**
 * Forgot Password page.
 * Allows the user to submit a recovery email.
 *
 * @returns JSX.Element
 */
export default function ForgotPassword(): JSX.Element {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Si el correo existe, recibirá instrucciones.");
  }

  return (
    <div className="forgot-container">
      <div className="forgot-card">

        <img
          src="/public/images/uvmeet-removebg-preview.png"
          alt="UVMeet Logo"
          className="forgot-logo"
        />

        <h2 className="forgot-title">Ingrese el correo de recuperación</h2>

        <form className="forgot-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {message && (
            <p className="forgot-msg" role="alert">
              {message}
            </p>
          )}

          <button type="submit" className="forgot-button">
            Confirmar
          </button>
        </form>

        <p className="forgot-footer">
          ¿No tiene cuenta? <a href="/register">Regístrate</a>
        </p>
      </div>
    </div>
  );
}
