// src/pages/home.tsx
import "../styles/home.sass";
import Menu from "../components/menu";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const footerRef = useRef<HTMLElement | null>(null);

  const goToFooter = () => {
    setOpenMenu(false);
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home-container" onClick={() => setOpenMenu(false)}>
      <Menu open={openMenu} setOpen={setOpenMenu} goToFooter={goToFooter} />

      <header className="home-header">
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

        <nav className="navbar">
          <button className="nav-link" onClick={() => navigate("/about")}>sobre nosotros</button>
          <button className="nav-link" onClick={goToFooter}>mapa del sitio</button>
        </nav>
      </header>

      <div className="sidebar-btn">REUNIONES</div>

      <main className="home-main">
        <h1 className="main-title">Videoconferencias <br /> seguras para todos</h1>
        <p className="main-subtitle">conecta y colabora con los que quieras en uv meet</p>

        <div className="action-section">
          <p className="question">¿Qué deseas hacer?</p>
          <div className="actions">
            <button className="create-btn">crear reunión</button>
            <input type="text" placeholder="ingrese el link de la reunión" className="room-input" />
            <button className="join-btn" onClick={() => navigate("/room")}>unirme</button>
          </div>
        </div>
      </main>

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
};

export default Home;
