import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { fetchMaquinaById, fetchMaquinaImagenes, formatMoney } from "../api/maquinas"; 
import "../styles/machineDetails.css"; 

// 🔥 Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

                // 🔥 Traer imágenes hijas
                const imgs = await fetchMaquinaImagenes(id);
                setImagenesExtra(imgs);

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

    // 🔥 Combinar imagen principal + imágenes extra
    const imagenes = [
        machine.imagensUrl,
        ...imagenesExtra.map(i => i.ImagensUrl)
    ].filter(Boolean);

    return (
        <section className="section machine-details-page">
            <div className="container">
                
                <div className="machine-details-content-wrapper">

                    {/* COLUMNA 1: IMÁGENES */}
                    <div className="machine-details-media">

                        {/* 🔥 SLIDER DE IMÁGENES */}
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            style={{ width: "100%", borderRadius: "12px" }}
                        >
                            {imagenes.map((img, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="image-aspect-ratio-wrapper">
                                        <img 
                                            src={img || "/placeholder-machine.jpg"} 
                                            alt={`Imagen ${idx}`}
                                            className="main-machine-image"
                                        />
                                    </div>
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
