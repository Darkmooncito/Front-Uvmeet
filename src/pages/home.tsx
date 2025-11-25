import "../styles/home.sass";
import Menu from "../components/menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* HEADER */}
      <header className="home-header">
        <div className="header-left">

          {/* BOTÓN HAMBURGUESA */}
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

        <nav className="navbar">
          <a href="/about">sobre nosotros</a>
          <a href="/sitemap">mapa del sitio</a>
        </nav>
      </header>

      {/* BOTÓN LATERAL */}
      <div className="sidebar-btn">
        REUNIONES
      </div>

      {/* MAIN */}
      <main className="home-main">
        <h1 className="main-title">
          Videoconferencias <br />
          seguras para todos
        </h1>

        <p className="main-subtitle">
          conecta y colabora con los que quieras en uv meet
        </p>

        <div className="action-section">
          <p className="question">¿Qué deseas hacer?</p>

          <div className="actions">
            <button className="create-btn">crear reunión</button>

            <input
              type="text"
              placeholder="ingrese el link de la reunión"
              className="room-input"
            />

            <button
              className="join-btn"
              onClick={() => navigate("/room")}
            >
              unirme
            </button>
          </div>
        </div>
      </main>

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
};

export default Home;
