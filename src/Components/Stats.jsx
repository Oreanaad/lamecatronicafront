export default function Stats(){
const items = [
{kpi:'200ms', label:'TTFB en sitios React optimizados'},
{kpi:'+38%', label:'Conversión promedio post‑optimización'},
{kpi:'99.9%', label:'Uptime SLA en integraciones críticas'},
{kpi:'7 días', label:'Discovery a roadmap claro'}
]
return (
<section className="section">
<div className="container stats">
{items.map((x)=> (
<div className="stat" key={x.kpi}>
<div className="stat__kpi">{x.kpi}</div>
<div className="stat__label">{x.label}</div>
</div>
))}
</div>
</section>
)
}