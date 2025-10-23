import '../styles/testimonials.css'
export default function Testimonials(){
const data = [
{ quote: 'Nos migraron el checkout y subimos la conversión en un mes.', author: 'Directora e‑commerce' },
{ quote: 'Integramos ERP + tienda + logística sin dolores.', author: 'COO retail' },
{ quote: 'El panel IoT nos dio visibilidad real del piso de planta.', author: 'Jefe de planta' },
]
return (
<section className="section">
<div className="container">
<h2 className="titulotestimonials">Testimonios</h2>
<div className="quotes">
{data.map((t)=> (
<figure className="quote" key={t.author}>
<blockquote>“{t.quote}”</blockquote>
<figcaption>— {t.author}</figcaption>
</figure>
))}
</div>
</div>
</section>
)
}