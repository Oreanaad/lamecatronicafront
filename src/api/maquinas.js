const API_BASE = import.meta.env.VITE_API_BASE || ""; // ej: http://localhost:4000

export async function fetchMaquinas() {
  const res = await fetch(`${API_BASE}/api/maquinas`, { credentials: "omit" });
  return await parseJsonOrThrow(res);
}

export async function fetchMaquinaById(id) {
  const res = await fetch(`${API_BASE}/api/maquinas/${id}`, { credentials: "omit" });
  return await parseJsonOrThrow(res);
}

// Helper: evita "Unexpected token <" si llega HTML en lugar de JSON
async function parseJsonOrThrow(res) {
  const ct = res.headers.get("content-type") || "";
  const text = await res.text();
  if (!res.ok) throw new Error(text || `HTTP ${res.status}`);
  if (!ct.includes("application/json")) {
    throw new Error(`Respuesta no JSON: ${text.slice(0,120)}...`);
  }
  return JSON.parse(text);
}

export function formatMoney(v) {
  if (v == null) return "";
  if (typeof Intl !== "undefined") {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(+v);
  }
  // fallback simple
  return "$ " + Number(v).toLocaleString("es-AR");
}
