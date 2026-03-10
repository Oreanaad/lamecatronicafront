import { Menu } from "lucide-react";
import "../styles/nav.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        {/* logo a la izquierda */}
        <a href="/" className="nav__brand">
          <img src="/logo.png" alt="Mecatrónica Carbajal" className="brand-logo" />
        </a>

        <nav className="nav__links">
        
          {/* 🔑 CORRECCIÓN: Usar /#ancla para ir a la página principal y luego a la sección */}
          <a href="/#industrias">Nosotros</a>
          <a href="/#maquinas">Productos</a>
          
          {/* El enlace de Login está bien */}
          <a href="https://lamecatronica.ddns.net/wwpbaseobjects.seclogin.aspx">Login</a>
    
        </nav>

        <button className="nav__burger" aria-label="menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}