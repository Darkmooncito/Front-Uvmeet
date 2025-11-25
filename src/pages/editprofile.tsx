import { useState } from "react";
import "../styles/editprofile.sass";
import Menu from "../components/menu";

export default function EditProfile() {
  const [openMenu, setOpenMenu] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    phone: "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    alert("Perfil guardado correctamente");
  }

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

      {/* FORM */}
      <div className="edit-profile-container">
        <div className="edit-card">

          <div className="profile-photo">
            <div className="circle">
              <span className="icon">👤</span>
            </div>
            <button className="btn-edit-photo">Editar foto</button>
          </div>

          <div className="username-section">
            <h2 className="username">Usuario</h2>
            <button className="btn-edit-username">Editar</button>
          </div>

          <form onSubmit={handleSubmit} className="edit-form">
            <label>Nombre</label>
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />

            <label>Apellido</label>
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />

            <label>Correo</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} />

            <label>Edad</label>
            <input type="number" name="age" value={form.age} onChange={handleChange} />

            <label>Teléfono</label>
            <input type="text" name="phone" value={form.phone} onChange={handleChange} />

            <button type="submit" className="btn-save">Guardar</button>
          </form>
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
