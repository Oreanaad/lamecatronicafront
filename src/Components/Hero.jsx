import { motion } from "framer-motion";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__video-wrapper">
        <video
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/videos/hero.webm" type="video/webm" />
          Tu navegador no soporta video HTML5.
        </video>
        
        <div className="hero__overlay" />
      </div>

      <motion.div
        className="hero__content container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="hero__title">
          
  Máquinas para Estrichado de Pallet, Embalaje General y de Envasado de  <span className="accent">Productos a tu medida</span>  
        </h1>
      
      </motion.div>
    </section>
  );
}
