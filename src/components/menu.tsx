import { useNavigate } from "react-router-dom";
import "../styles/menu.sass";

export default function Menu({ open, setOpen }: { open: boolean; setOpen: any }) {
  const navigate = useNavigate();

  return (
    <div
      className={`menu-container ${open ? "open" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <p onClick={() => { navigate("/home"); setOpen(false); }}>Inicio</p>
      <p onClick={() => { navigate("/about"); setOpen(false); }}>Sobre nosotros</p>
      <p onClick={() => { navigate("/sitemap"); setOpen(false); }}>Mapa del sitio</p>
      <p onClick={() => { navigate("/editprofile"); setOpen(false); }}>Editar perfil</p>
      <p onClick={() => { navigate("/deleteaccount"); setOpen(false); }}>Eliminar cuenta</p>
    </div>
  );
}
