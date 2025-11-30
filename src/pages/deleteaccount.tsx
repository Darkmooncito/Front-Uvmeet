// src/pages/deleteaccount.tsx
import { useState, useRef } from "react";
import Menu from "../components/menu";
import "../styles/deleteaccount.sass";
import { useAuth } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function DeleteAccount() {
  const [openMenu, setOpenMenu] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const { user, deleteAccount } = useAuth();
  const navigate = useNavigate();

  const goToFooter = () => {
    setOpenMenu(false);
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  async function handleDelete() {
    if (!user) return;
    await deleteAccount(user.id);
    navigate("/login");
  }

  return (
    <div className="editprofile-page" onClick={() => setOpenMenu(false)}>
      <Menu open={openMenu} setOpen={setOpenMenu} goToFooter={goToFooter} />

      <header className="edit-header">
        <div className="header-left">
          <button
            className="btn-menu"
            aria-expanded={openMenu}
            aria-controls="main-menu"
            onClick={(e) => { e.stopPropagation(); setOpenMenu(prev => !prev); }}
          >
            ☰
          </button>

          <img src="/images/uvmeet-removebg-preview.png" alt="UVMeet Logo" className="logo" />
        </div>
      </header>

      <div className="edit-profile-container">
        <div className="edit-card delete-card">
          {!confirm ? (
            <>
              <h2 className="delete-title">¿DESEA ELIMINAR ESTA CUENTA?</h2>
              <button className="btn-delete-main" onClick={() => setConfirm(true)}>Eliminar cuenta</button>
            </>
          ) : (
            <>
              <p className="delete-confirm-text">¿Está seguro que desea eliminar su cuenta de UVMeet?</p>
              <div className="delete-confirm-buttons">
                <button className="btn-confirm-delete" onClick={handleDelete}>Eliminar</button>
                <button className="btn-confirm-cancel" onClick={() => setConfirm(false)}>Cancelar</button>
              </div>
            </>
          )}
        </div>
      </div>

      <footer className="home-footer" ref={footerRef}>
        <div className="footer-divider"></div>
        <h3>Mapa del sitio</h3>
        <div className="footer-columns">
          <div>
            <p><strong>ACCESO</strong></p>
            <p>Iniciar Sesión</p>
            <p>Crear cuenta</p>
            <p>Recuperar contraseña</p>
          </div>

          <div>
            <p><strong>CUENTA Y SOPORTE</strong></p>
            <p>Editar perfil</p>
            <p>Sobre nosotros</p>
            <p>Contacto</p>
          </div>

          <div>
            <p><strong>NAVEGACIÓN</strong></p>
            <p>Inicio</p>
            <p>Sobre nosotros</p>
            <p>Reuniones</p>
          </div>

          <div>
            <p><strong>CONTACTO</strong></p>
            <p>uvmeet@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
