import type { JSX } from "react";
import "../styles/home.sass";

/**
 * Home page component.
 * Displays navigation, meeting actions and site sections.
 *
 * @returns JSX.Element
 */
export default function Home(): JSX.Element {
  return (
    <div className="home-container">
      {/* NAVBAR */}
      <nav className="home-navbar">
        <div className="home-logo">
          <img src="/public/images/uvmeet-removebg-preview.png" alt="UVMeet logo" />
        </div>

        <ul className="home-nav-links">
          <li><a href="/about">sobre nosotros</a></li>
          <li><a href="/sitemap">mapa del sitio</a></li>
          <li><a href="/menu">menu</a></li>
        </ul>
      </nav>

      {/* LEFT BUTTON */}
      <div className="home-left-button">
        <button>REUNIONES</button>
      </div>

      {/* HERO */}
      <section className="home-hero">
        <h1>Videoconferencias seguras para todos</h1>
        <p className="hero-subtitle">
          conecta y colabora con los que quieras en uv meet
        </p>

        <p className="hero-question">¿Qué deseas hacer?</p>

        <div className="home-actions">
          <button className="btn-red">crear reunion</button>

          <div className="link-join">
            <input
              type="text"
              placeholder="ingrese el link de la reunion"
              aria-label="Link de reunión"
            />
            <button className="btn-red">unirme</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="footer-column">
          <h4>ACCESO</h4>
          <p><a href="/login">Iniciar Sesion</a></p>
          <p><a href="/register">Crear cuenta</a></p>
          <p><a href="/forgotpassword">Recuperar contraseña</a></p>
        </div>

        <div className="footer-column">
          <h4>CUENTA Y SOPORTE</h4>
          <p><a href="/profile">Editar perfil</a></p>
          <p><a href="/about">Sobre nosotros</a></p>
          <p><a href="/contact">Contacto</a></p>
        </div>

        <div className="footer-column">
          <h4>NAVEGACION</h4>
          <p><a href="/">Inicio</a></p>
          <p><a href="/about">Sobre nosotros</a></p>
          <p><a href="/meetings">Reuniones</a></p>
        </div>

        <div className="footer-column">
          <h4>CONTACTO</h4>
          <p>moviewavev@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
