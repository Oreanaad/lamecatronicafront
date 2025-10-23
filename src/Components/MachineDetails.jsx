import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMaquinas, formatMoney } from "../api/maquinas";
import "../styles/machineDetails.css"; // 👈 archivo nuevo

export default function Machines(){
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchMaquinas();
        const visibles = (data || []).filter(x => x.maquinaWebEstado === true || x.maquinaWebEstado === 1);
        setItems(visibles);
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
    <section id="soluciones" className="section">
      <div className="container">
        <h2 className="h2">Máquinas disponibles</h2>

        <div className="machine-list-grid">
          {items.map(m => (
            <article className="machine-list-card" key={m.maquinaId}>
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
                  <Link to={`/maquina/${m.maquinaId}`} className="machine-list-link">
                    {m.maquinaNombre}
                  </Link>
                </h3>

                <div className="machine-list-price">
                  {m.maquinaPrecio != null && !Number.isNaN(+m.maquinaPrecio)
                    ? formatMoney(m.maquinaPrecio)
                    : "Consultar precio"}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
