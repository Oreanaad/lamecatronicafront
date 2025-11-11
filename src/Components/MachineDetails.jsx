import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // 👈 NECESARIO
import { fetchMaquinaById, formatMoney } from "../api/maquinas"; 
import "../styles/machineDetails.css"; 

export default function MachineDetails(){
const { id } = useParams(); // 🚨 CLAVE: Obtiene el ID de la URL
 const [machine, setMachine] = useState(null);
const [loading, setLoading] = useState(true);
const [err, setErr] = useState("");

useEffect(() => {
 (async () => {
 try {

 const data = await fetchMaquinaById(id); 
setMachine(data);
 } catch (e) {
 console.error("fetchMaquinaById error:", e);
 setErr(e.message || `Error cargando máquina ${id}`);
 } finally {
 setLoading(false);
}
})();
 }, [id]); // El efecto se ejecuta cuando el ID cambia

    // --- (Tu JSX de renderizado va aquí) ---
    if (loading) return <section className="section"><div className="container">Cargando detalles…</div></section>;
    if (err) return <section className="section"><div className="container" style={{color:"crimson"}}>{err}</div></section>;
    if (!machine) return <section className="section"><div className="container">Máquina no encontrada.</div></section>;

    return (
    <section className="section machine-details-page">
        <div className="container">
            
            {/* 1. CONTENEDOR PRINCIPAL DE DOS COLUMNAS */}
            <div className="machine-details-content-wrapper">
            
                {/* COLUMNA IZQUIERDA: IMAGEN */}
                <div className="machine-details-media">
                    <img 
                        src={machine.imagenUrl || "/placeholder-machine.jpg"} 
                        alt={machine.maquinaNombre} 
                        className="main-machine-image"
                    />
                </div>
                
                {/* COLUMNA DERECHA: DETALLES, PRECIO Y ACCIÓN */}
                <div className="machine-details-info">
                    
                    {/* TÍTULO Y DESCRIPCIÓN */}
                    <h1 className="machine-title">{machine.maquinaNombre}</h1>
         

                    <div className="machine-description-long">
                        {/* Asumiendo que maquinaDescripcion es larga */}
                        <p>{machine.maquinaDescripcion}</p>
                    </div>

                    {/* SECCIÓN DE PRECIO Y ACCIÓN (como la caja amarilla) */}
                    <div className="machine-purchase-box">
                        <div className="machine-price-display">
                            {machine.maquinaPrecio != null && !Number.isNaN(+machine.maquinaPrecio)
                                ? formatMoney(machine.maquinaPrecio)
                                : "Consultar precio"}
                        </div>
                        
                        <div className="machine-actions">
                            {/* Este es el botón principal "Consultar/Comprar" */}
                           
                        </div>
                        
                      
                    </div>
                </div> 
            </div> {/* Fin de .machine-details-content-wrapper */}
        </div>
    </section>
);
}