// src/components/menu.tsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/menu.sass";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  goToFooter?: () => void;
};

export default function Menu({ open, setOpen, goToFooter }: Props) {
  const navigate = useNavigate();
  const [confirmLogout, setConfirmLogout] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Close on click outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open, setOpen]);

  function handleNavigate(path: string) {
    setOpen(false);
    navigate(path);
  }

  function handleLogout() {
    // clear local storage tokens/user if any
    localStorage.removeItem("uv_token");
    localStorage.removeItem("uv_user");
    setConfirmLogout(false);
    setOpen(false);
    navigate("/login");
  }

  function handleFooterClick() {
    setOpen(false);
    if (goToFooter) goToFooter();
    else navigate("/sitemap");
  }

  return (
    <div
      ref={ref}
      id="main-menu"
      className={`menu-container ${open ? "open" : ""}`}
      role="menu"
      aria-hidden={!open}
      onClick={(e) => e.stopPropagation()}
    >
      {!confirmLogout ? (
        <>
          <p role="menuitem" tabIndex={0} onClick={() => handleNavigate("/home")}>
            Inicio
          </p>

          <p role="menuitem" tabIndex={0} onClick={() => handleNavigate("/about")}>
            Sobre nosotros
          </p>

          <p role="menuitem" tabIndex={0} onClick={handleFooterClick}>
            Mapa del sitio
          </p>

          <p role="menuitem" tabIndex={0} onClick={() => handleNavigate("/editprofile")}>
            Editar perfil
          </p>

          <p role="menuitem" tabIndex={0} onClick={() => setConfirmLogout(true)}>
            Cerrar sesión
          </p>

          <p role="menuitem" tabIndex={0} onClick={() => handleNavigate("/deleteaccount")}>
            Eliminar cuenta
          </p>
        </>
      ) : (
        <div className="logout-confirm" role="dialog" aria-modal="true">
          <p className="logout-title">¿Seguro que quieres cerrar sesión?</p>
          <div className="logout-buttons">
            <button className="btn-accept" onClick={handleLogout}>
              Aceptar
            </button>
            <button className="btn-cancel" onClick={() => setConfirmLogout(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
