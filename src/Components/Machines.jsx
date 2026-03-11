import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Necesario para la navegación
import { fetchMaquinas, formatMoney } from "../api/maquinas";
import "../styles/MachinesList.css"; 

export default function Machines(){
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(true);
const [err, setErr] = useState("");

useEffect(() => {
  (async () => {
    try {
      const data = await fetchMaquinas();
      
      // Filtramos las máquinas en true, y quitamos el .slice()
      const visibles = (data || []).filter(
        x => x.maquinaWebEstado === true || x.maquinaWebEstado === 1
      );
      
      setItems(visibles); // Ahora 'visibles' tendrá el total de las que pasaron el filtro
    } catch (e) {
      console.error("fetchMaquinas error:", e);
      setErr(e.message || "Error cargando máquinas");
    } finally {
      setLoading(false);
    }
  })();
}, []);
useEffect(() => {
  (async () => {
    try {
      const data = await fetchMaquinas();
      
      // Filtramos las máquinas en true, y quitamos el .slice()
      const visibles = (data || []).filter(
        x => x.maquinaWebEstado === true || x.maquinaWebEstado === 1
      );
      
      setItems(visibles); // Ahora 'visibles' tendrá el total de las que pasaron el filtro
    } catch (e) {
      console.error("fetchMaquinas error:", e);
      setErr(e.message || "Error cargando máquinas");
    } finally {
      setLoading(false);
    }
  })();
}, []);
if (loading) return <section className="section"><div className="container">Cargando máquinas…</div></section>;
if (err) return (
<section className="section">
<div className="container">
<div style={{color:"crimson", fontWeight:700, marginBottom:8}}>Error:</div>
<pre style={{whiteSpace:"pre-wrap"}}>{err}</pre>
 <div style={{marginTop:8, color:"#555"}}>Revisá VITE_API_BASE y que el backend devuelva JSON.</div>
</div>
</section>
 );
if (!items.length) return <section className="section"><div className="container">No hay máquinas publicadas.</div></section>;

 return (
<section id="maquinas" className="section">
<div className="container">
 <h2 className="tituloMaquina">Máquinas disponibles</h2>

 <div className="machine-list-grid">
 {items.map(m => (
                // 🚨 CAMBIO CLAVE: Utilizamos <Link> como el contenedor principal 🚨
 <Link 
                to={`/maquina/${m.maquinaId}`} 
                className="machine-list-link" // Clase para estilo visual (cursor, hover)
                key={m.maquinaId}
            >
                <article className="machine-list-card">
                    <div className="machine-list-media">
                        <img
                            src={m.imagenUrlChica || m.imagenUrl || "/placeholder-machine.jpg"}
                            alt={m.maquinaNombre}
                            className="machine-list-img"
                            loading="lazy"
                        />
                    </div>

                    <div className="machine-list-body">
                        <h3 className="machine-list-title">
                            {/* Ya no necesitamos <Link> aquí, el padre lo envuelve */}
                            {m.maquinaNombre}
                        </h3>

                        <div className="machine-list-price">
                            {m.maquinaPrecio != null && !Number.isNaN(+m.maquinaPrecio)
                                ? formatMoney(m.maquinaPrecio)
                                : "Consultar precio"}
                        </div>
                    </div>
                </article>
            </Link>
))}
 </div>
</div>
 </section>
 );
}