import { useState, type JSX } from "react";
import { resetPasswordRequest } from "../services/auth.service";
import "../styles/ressetpasword.sass";

/**
 * Reset password page.
 * Allows user to set a new password based on a reset token.
 *
 * @returns JSX.Element
 */
export default function RessetPasword(): JSX.Element {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (password !== repeatPassword) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    try {
      // Token desde query param: /ressetpasword?token=xxxx
      const token = new URLSearchParams(window.location.search).get("token");
      if (!token) {
        setErrorMessage("Token no válido");
        return;
      }

      const ok = await resetPasswordRequest({ password, token });

      if (!ok) {
        setErrorMessage("No se pudo actualizar la contraseña");
        return;
      }

      setSuccessMessage("Contraseña actualizada correctamente");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);

    } catch (err) {
      setErrorMessage("Error al procesar la solicitud");
    }
  }

  return (
    <div className="reset-container">
      <div className="reset-card">
        <img
          src="/public/images/uvmeet-removebg-preview.png"
          alt="UVMeet logo"
          className="reset-logo"
        />

        <form onSubmit={handleSubmit} className="reset-form">
          <label htmlFor="new-password">Ingrese su nueva contraseña</label>
          <input
            id="new-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="repeat-password">Repita su nueva contraseña</label>
          <input
            id="repeat-password"
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />

          {errorMessage && <p className="reset-error">{errorMessage}</p>}
          {successMessage && <p className="reset-success">{successMessage}</p>}

          <button type="submit" className="reset-button">
            confirmar
          </button>
        </form>
      </div>
    </div>
  );
}
