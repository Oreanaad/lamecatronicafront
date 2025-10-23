import '../styles/footer.css'


export default function Footer(){
return (
<footer className="footer">
<div className="container footer__inner">
<div>
<strong>Mecatrónica carbajal</strong>
<p>
Dirección
ARGENTINA
Av. Roca Oeste 273
Tafi Viejo - Tucuman</p>
<p>+3813544818</p>
<p>
Juangcarbajal@gmail.com
</p>

</div>
    <nav className="nav__links">
          <a href="#soluciones">Servicios</a>
          <a href="#industrias">Nosotros</a>
          <a href="#maquinas">Productos</a>
          <a href="#contacto" className="btn btn--sm">
            Contáctanos
          </a>
        </nav>
</div>
<div className="container footer__bottom">
<small>© {new Date().getFullYear()} LaMecatrónica — Todos los derechos reservados</small>
</div>
</footer>
)
}