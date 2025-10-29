import '../styles/testimonials.css'
export default function Testimonials(){
const data = [
{ quote: 'La máquina superó nuestras expectativas. Rendimiento superior y cero fallas en la producción. Una inversión que vale cada centavo.', author: 'Ing. Marcos R., Metalúrgica del Centro' },
{ quote: 'Necesitábamos un equipo que no parara. La [Nombre de la Máquina] es robusta y totalmente fiable. Su servicio técnico es rápido, aunque casi nunca lo necesitamos.', author: 'Lucas V., Jefe de Obra' },
{ quote: "Fácil de usar y nos permitió duplicar la velocidad de corte. Menos tiempo de trabajo, más ganancias. Totalmente recomendados.",author: 'Sofía E., Manufacturas 3D, author' },
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