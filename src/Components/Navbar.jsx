import { Menu } from "lucide-react";
import "../styles/nav.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        {/* logo a la izquierda */}
        <a href="/" className="nav__brand">
          <img src="/logo.jpg" alt="Mecatrónica Carbajal" className="brand-logo" />
        </a>

        <nav className="nav__links">
          <a href="#soluciones">Servicios</a>
          <a href="#industrias">Nosotros</a>
          <a href="#maquinas">Productos</a>
           <a href="http://lamecatronicac.myvnc.com//wwpbaseobjects.notauthorized.aspx?GxObject=Home4">Login</a>
          <a href="#contacto" className="btn btn--sm">
            Contáctanos
          </a>
        </nav>

        <button className="nav__burger" aria-label="menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
