import { motion } from 'framer-motion'
import '../styles/demos.css'


export default function Demos(){
return (
<section id="demos" className="section demos">
<div className="container">
<h2 className="tituloNosotros">Nosotros</h2>
<div className="demo__grid">
<motion.div whileHover={{scale:1.02}} className="demo__card">
<h3>Servicios personalizados</h3>
<p>Nuestros clientes son nuestra prioridad, y nos comprometemos a brindar una atención personalizada y efectiva.</p>

</motion.div>
<motion.div whileHover={{scale:1.02}} className="demo__card">
<h3>Excelencia y profesionalismo</h3>
<p>Nuestro personal está altamente cualificado y comprometido con ofrecer un trabajo de alta calidad.</p>

</motion.div>
<motion.div whileHover={{scale:1.02}} className="demo__card">
<h3>Garantía</h3>
<p>Nuestros clientes pueden estar tranquilos, porque todos nuestros trabajos poseen garantía.</p>
</motion.div>
</div>
</div>
</section>
)
}