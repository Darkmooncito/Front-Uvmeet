// src/pages/editprofile.tsx
import { useState, useRef } from "react";
import "../styles/editprofile.sass";
import Menu from "../components/menu";
import { useAuth } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [openMenu, setOpenMenu] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
    age: String(user?.age ?? ""),
    phone: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (!user) throw new Error("No user");
      await updateProfile(user.id, { firstName: form.firstName, lastName: form.lastName, age: Number(form.age) });
      alert("Perfil guardado correctamente");
      navigate("/home");
    } catch (err:any) {
      alert(err.message || "Error");
    }
  }

  const goToFooter = () => {
    setOpenMenu(false);
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
        <div className="edit-card">
          <div className="profile-photo">
            <div className="circle"><span className="icon">👤</span></div>
            <button className="btn-edit-photo">Editar foto</button>
          </div>

          <div className="username-section">
            <h2 className="username">Usuario</h2>
            <button className="btn-edit-username">Editar</button>
          </div>

          <form onSubmit={handleSubmit} className="edit-form">
            <label>Nombre</label>
            <input name="firstName" type="text" value={form.firstName} onChange={handleChange} />

            <label>Apellido</label>
            <input name="lastName" type="text" value={form.lastName} onChange={handleChange} />

            <label>Correo</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} />

            <label>Edad</label>
            <input name="age" type="number" value={form.age} onChange={handleChange} />

            <label>Teléfono</label>
            <input name="phone" type="text" value={form.phone} onChange={handleChange} />

            <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
              <button type="submit" className="btn-save">Guardar</button>
              <button type="button" className="btn-cancel" onClick={() => navigate("/home")}>Cancelar</button>
            </div>
          </form>
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
