import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      nombre: form.nombre.value,
      email: form.email.value,
      mensaje: form.mensaje.value,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (json.ok) setStatus("✅ Mensaje enviado con éxito");
      else setStatus("⚠️ Hubo un error al enviar el mensaje");
    } catch (err) {
      console.error(err);
      setStatus("❌ Error de conexión con el servidor");
    }
  };

  return (
    <section id="contacto" className="section contact">
      <div className="container contact__grid">
        <div>
          <h2 className="titulocontact">Contanos tu proyecto</h2>
          <p>
            Más de 10 años brindando soluciones industriales confiables,
            contáctenos y hagamos realidad su proyecto.
          </p>
          <ul className="contact__bullets">
            <li>+10 años de experiencia en automatización y soluciones industriales.</li>
            <li>Mano de obra calificada para instalación, desarrollo y modificación de paneles.</li>
            <li>Compromiso con la calidad, seguridad y eficiencia en cada proyecto.</li>
          </ul>
        </div>

        <div>
          <img src="/contac.png" className="logo"></img>
          </div>
      </div>
    </section>
  );
}
