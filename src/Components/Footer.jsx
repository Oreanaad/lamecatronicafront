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
                <a href="https://www.youtube.com/@mecatronicacarbajal" target="_blank" rel="noopener noreferrer" title="YouTube">
                    <FaYoutube size={30} />
                </a>
                
                {/* Facebook */}
                <a href="https://www.facebook.com/MecatronicaCarbajal?mibextid=wwXIfr&rdid=pu3FVe5dXAbr8AA4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17NV2wpm7i%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <FaFacebookF size={30} />
                </a>
                
                {/* Instagram */}
                <a href="https://www.instagram.com/mecatcarbajal/?igsh=c3o5dGN5Mm1peGtw&utm_source=qr#" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <FaInstagram size={30} />
                </a>
                
                {/* WhatsApp (usa la URL de API de WhatsApp) */}
                <a href="https://wa.me/+543813544818" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                    <FaWhatsapp size={30} />
                </a>
            </div>
        </div>
        {/* FIN DE LA NUEVA SECCIÓN */}

        <nav className="nav__links_footer">
            {/* ... Tu navegación actual ... */}
            <a href="#industrias">Nosotros</a>
            <a href="#maquinas">Productos</a>

        </nav>
    </div>
    <div className="container footer__bottom">
        <small>© {new Date().getFullYear()} LaMecatrónica — Todos los derechos reservados</small>
    </div>
</footer>
)
}