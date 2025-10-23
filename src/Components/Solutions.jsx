import { Cpu, Bot, Layers, Globe2 } from 'lucide-react'
import '../styles/cardsServicio.css'


const data = [
{ icon: <Cpu size={22}/>, title: 'Electrónica Industrial', desc: 'Ofrecemos servicios de asesoramiento, diseño, montaje, programación y puesta en marcha de variadores de frecuencia (velocidad), arrancadores suaves para motores trifásicos, programación de PLC, sensores y actuadores de todo tipo', tags: ['Electrónica'] },
{ icon: <Bot size={22}/>, title: 'Electricidad Industrial', desc: 'Ofrecemos servicios de asesoramiento, diseño, montaje y puesta en marcha de todo lo relacionado con la electricidad industrial, comercial y domiciliaria. Nos especializamos en tableros, luminarias, acometidas, modificaciones, ampliaciones y reparaciones, entre otros.', tags: ['Electricidad', 'Modificaciones'] },
{ icon: <Layers size={22}/>, title: 'Mantenimiento correctivo',desc:'Visitaremos su fábrica y diagnosticaremos el problema. Posteriormente, acordaremos los precios de reparación, mantenimiento o modificación. Nuestro personal está altamente cualificado para resolver fallas en el ámbito industrial y, en la mayoría de los casos, disponemos de repuestos básicos para ofrecer una solución inmediata.', tags: ['Soluciones','Mantenimientos','Diagnósticos'] },
{ icon: <Globe2 size={22}/>, title: 'Mantenimiento preventivo', desc: 'Nuestro servicio de mantenimiento es la mejor opción para garantizar el funcionamiento óptimo de tus equipos. Realizamos visitas programadas cada semana para realizar un diagnóstico y seguimiento exhaustivo de los equipos críticos. Nuestro equipo de profesionales está capacitado para anticiparse a cualquier falla y elaborar informes detallados.', tags: ['Corrección de fallas','Mantenimiento'] },
]


export default function Solutions(){
return (
<section id="soluciones" className='section'>
<div className="container section demo">
<h2 className="Title">Servicios</h2>

<div className="cards">
{data.map((s,i)=> (
<article className="card" key={i}>
<div className="card__icon">{s.icon}</div>
<h3 className="card__title">{s.title}</h3>
<p className="card__desc">{s.desc}</p>
<div className="card__tags">
{s.tags.map((t,ti)=> <span className="tag" key={ti}>{t}</span>)}
</div>
</article>
))}
</div>
</div>
</section>
)
}