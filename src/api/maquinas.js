// Define la URL base de tu backend Render directamente, ya que la usas en ambas funciones.
// NOTA: Si usas VITE_API_BASE en otras partes, puedes dejar la definición de arriba,
// pero la URL debe ser la correcta.

const BACKEND_BASE_URL = "https://lamecatronicanew.onrender.com";

// export const API_BASE = import.meta.env.VITE_API_BASE || ""; // (Se puede omitir esta línea si solo usas BACKEND_BASE_URL)

export async function fetchMaquinas() {
    // Usamos el literal completo para consistencia
    const res = await fetch(`${BACKEND_BASE_URL}/api/maquinas`, { credentials: "omit" });
    return await parseJsonOrThrow(res);
}

export async function fetchMaquinaById(id) {
    // *** CAMBIO CLAVE AQUÍ: Usamos la URL absoluta del backend ***
    const res = await fetch(`${BACKEND_BASE_URL}/api/maquinas/${id}`, { credentials: "omit" });
    return await parseJsonOrThrow(res);
}

// Helper: evita "Unexpected token <" si llega HTML en lugar de JSON
async function parseJsonOrThrow(res) {
// ... (resto de la función Helper sin cambios)
    const ct = res.headers.get("content-type") || "";
    const text = await res.text();
    if (!res.ok) throw new Error(text || `HTTP ${res.status}`);
    if (!ct.includes("application/json")) {
        throw new Error(`Respuesta no JSON: ${text.slice(0,120)}...`);
    }
    return JSON.parse(text);
}

export function formatMoney(v) {
// ... (resto de la función sin cambios)
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