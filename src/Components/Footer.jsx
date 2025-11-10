import '../styles/footer.css'
// 🚨 Necesitas instalar 'react-icons' (npm install react-icons)
// Importamos los iconos que necesitamos
import { FaYoutube, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';


export default function Footer(){
return (
<footer className="footer">
    <div className="container footer__inner">
        <div>
            <strong>Mecatronica Carbajal S.A.S.</strong>
            <p>
                Dirección:
                Av Roca Oeste 273
                Tafi Viejo – Tucumán - Argentina</p>
            <p>C.P.: 4103</p>
            <p>Cel: 3813544818</p>
            <p>Email: 
                info@mecatcarbajal.com
            </p>
            <p>www.lamecatronica.com</p>
        </div>

        {/* 🚨 NUEVA SECCIÓN DE ICONOS DE REDES SOCIALES 🚨 */}
        <div className="social__icons">
            <h3>Síguenos</h3>
            <div className="icon__list">
                {/* YouTube */}
                <a href="URL_DE_TU_YOUTUBE" target="_blank" rel="noopener noreferrer" title="YouTube">
                    <FaYoutube size={30} />
                </a>
                
                {/* Facebook */}
                <a href="URL_DE_TU_FACEBOOK" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <FaFacebookF size={30} />
                </a>
                
                {/* Instagram */}
                <a href="URL_DE_TU_INSTAGRAM" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <FaInstagram size={30} />
                </a>
                
                {/* WhatsApp (usa la URL de API de WhatsApp) */}
                <a href="https://wa.me/5493813544818" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                    <FaWhatsapp size={30} />
                </a>
            </div>
        </div>
        {/* FIN DE LA NUEVA SECCIÓN */}

        <nav className="nav__links_footer">
            {/* ... Tu navegación actual ... */}
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