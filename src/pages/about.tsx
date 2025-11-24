import "../styles/about.sass";

const About = () => {
  return (
    <div className="about-container">
      {/* HEADER */}
      <header className="about-header">
        <div className="header-left">
          <button className="hamburger-btn">☰</button>

          <img
            src="/images/uvmeet-removebg-preview.png"
            alt="UVMeet Logo"
            className="logo"
          />
        </div>

        <nav className="navbar">
          <a href="/about">sobre nosotros</a>
          <a href="/sitemap">mapa del sitio</a>
          <a href="#">menu</a>
        </nav>
      </header>

      {/* SIDEBAR */}
      <div className="sidebar-btn">Sobre nosotros</div>

      {/* MAIN CONTENT */}
      <main className="about-main">
        <div className="about-card">
          <h2>Sobre nosotros</h2>

          <p>
            En UV Meet creemos que la comunicación debe ser simple, rápida y accesible para todos.
            Por eso desarrollamos una plataforma de videollamadas moderna, segura y eficiente,
            pensada para conectar a personas, equipos y organizaciones sin importar dónde se encuentren.
          </p>

          <p>
            Nuestra misión es ofrecer una herramienta intuitiva que permita reuniones en línea de alta calidad,
            con funciones diseñadas para facilitar la colaboración: videollamadas estables, chat en tiempo real,
            uso compartido de pantalla y espacios virtuales que se adaptan a cualquier necesidad.
          </p>

          <p>
            Trabajamos con un enfoque centrado en el usuario, priorizando la seguridad, privacidad y experiencia fluida.
            UV Meet nace como una solución confiable para instituciones, empresas y personas que buscan comunicarse
            de forma profesional y sin complicaciones.
          </p>

          <p>
            En UV Meet, conectamos ideas, personas y proyectos.  
            Tu espacio digital para reunirte, aprender y trabajar.
          </p>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="about-footer">
        <div className="footer-divider"></div>

        <h3>Mapa del sitio</h3>

        <div className="footer-columns">
          <div>
            <p><strong>ACCESO</strong></p>
            <p>Iniciar Sesion</p>
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
            <p><strong>NAVEGACION</strong></p>
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

export default About;
