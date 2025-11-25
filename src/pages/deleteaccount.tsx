import { useState } from "react";
import "../styles/deleteaccount.sass";
import Menu from "../components/menu";

export default function DeleteAccount() {
  const [openMenu, setOpenMenu] = useState(false);
  const [confirm, setConfirm] = useState(false);

  return (
    <div className="editprofile-page">
      {/* HEADER */}
      <header className="edit-header">
        <div className="header-left">

          <button
            className="btn-menu"
            onClick={(e) => {
              e.stopPropagation();
              setOpenMenu((prev) => !prev);
            }}
          >
            ☰
          </button>

          <Menu open={openMenu} setOpen={setOpenMenu} />

          <img
            src="/images/uvmeet-removebg-preview.png"
            alt="UVMeet Logo"
            className="logo"
          />
        </div>
      </header>

      {/* MAIN */}
      <div className="edit-profile-container">
        <div className="edit-card delete-card">

          {!confirm ? (
            <>
              <h2 className="delete-title">¿DESEA ELIMINAR ESTA CUENTA?</h2>

              <button
                className="btn-delete-main"
                onClick={() => setConfirm(true)}
              >
                Eliminar cuenta
              </button>
            </>
          ) : (
            <>
              <p className="delete-confirm-text">
                ¿Está seguro que desea eliminar su cuenta de UVMeet?
              </p>

              <div className="delete-confirm-buttons">
                <button className="btn-confirm-delete">
                  Eliminar
                </button>

                <button
                  className="btn-confirm-cancel"
                  onClick={() => setConfirm(false)}
                >
                  Cancelar
                </button>
              </div>
            </>
          )}

        </div>
      </div>

      {/* FOOTER */}
      <footer className="home-footer">
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
