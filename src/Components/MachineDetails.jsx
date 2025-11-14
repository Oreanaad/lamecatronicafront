import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { fetchMaquinaById, fetchMaquinaImagenes, formatMoney } from "../api/maquinas"; 
import "../styles/machineDetails.css"; 

import "../styles/swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

// ESTOS SÍ O SÍ SON NECESARIOS
import "swiper/css";           // 👉 CSS base REAL de Swiper
import "swiper/css/pagination";


export default function MachineDetails() {

    const { id } = useParams();
    const [machine, setMachine] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");
    const [imagenesExtra, setImagenesExtra] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchMaquinaById(id);
                setMachine(data);

                const imgs = await fetchMaquinaImagenes(id);
                setImagenesExtra(imgs || []);

            } catch (e) {
                console.error("fetchMaquinaById error:", e);
                setErr(e.message || `Error cargando máquina ${id}`);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    if (loading) return <section className="section"><div className="container">Cargando detalles…</div></section>;
    if (err) return <section className="section"><div className="container" style={{color:"crimson"}}>{err}</div></section>;
    if (!machine) return <section className="section"><div className="container">Máquina no encontrada.</div></section>;

    // ✔ obtener imagen principal (case-insensitive seguro)
    const imagenPrincipal = machine.ImagenUrl || machine.imagenUrl || null;

    // ✔ combinar imágenes hijas
    const imagenes = [
        imagenPrincipal,
        ...imagenesExtra
            .map(i => i.ImagensUrl)
            .filter(Boolean)
    ].filter(Boolean);

    // ✔ si no hay imágenes → usar placeholder
    const imagenesFinal = imagenes.length > 0 
        ? imagenes 
        : ["/placeholder-machine.jpg"];

    return (
        <section className="section machine-details-page">
            <div className="container">
                
                <div className="machine-details-content-wrapper">

                    {/* COLUMNA 1: IMÁGENES */}
                    <div className="machine-details-media">

                <Swiper
    modules={[Pagination, Navigation]}
    pagination={{ clickable: true }}
    navigation={true}        // 🚀 Activa los botones
    spaceBetween={10}
    slidesPerView={1}
    loop={imagenesFinal.length > 1}
>
    {imagenesFinal.map((img, idx) => (
        <SwiperSlide key={idx}>
            <img src={img} className="main-machine-image" />
        </SwiperSlide>
    ))}
</Swiper>




                    </div>
                    
                    {/* COLUMNA 2: DETALLES */}
                    <div className="machine-details-info">
                        
                        <h1 className="machine-title">{machine.maquinaNombre}</h1>
                        
                        <div className="machine-description-long">
                            <pre className="machine-description-pre">{machine.maquinaDescripcion}</pre>
                        </div>
                        <div className="machine-description-long"> 
                            <p>{machine.maquinaLink}</p>
                             </div>
                        <div className="machine-purchase-box">
                            <div className="machine-price-display">
                                {machine.maquinaPrecio != null && !Number.isNaN(+machine.maquinaPrecio)
                                    ? formatMoney(machine.maquinaPrecio)
                                    : "Consultar precio"}
                            </div>
                        </div>

                    </div> 
                </div>
            </div>
        </section>
    );
}
