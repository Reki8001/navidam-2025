import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { crearPersona } from "@/services/PersonasService";
import type { APIResult } from "@/types/errores";
import type { Persona } from "@/types/Personas";
import { useState } from "react";

export default function NewPerson() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: ""
    });
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState<string>("");
    const [exito, setExito] = useState(false);

    // ✅ Manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Limpiar errores cuando el usuario empieza a escribir
        if (error) setError("");
    };

    // ✅ Función para guardar la persona
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validaciones básicas
        if (!formData.nombre.trim() || !formData.email.trim()) {
            setError("Todos los campos son obligatorios");
            return;
        }

        // Validación simple de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError("Por favor, introduce un email válido");
            return;
        }

        setCargando(true);
        setError("");
        
        try {
            // Crear objeto persona para enviar al backend
            const personaRequest: Persona = {
                id: 0, // El backend probablemente lo ignora o auto-genera
                nombre: formData.nombre.trim(),
                email: formData.email.trim()
            };

            // Llamar al service
            const resultado: APIResult<Persona> = await crearPersona(personaRequest);
            
            if (resultado.ok) {
                setExito(true);
                // Resetear formulario
                setFormData({ nombre: "", email: "" });
                
            } else {
                setError( "Error al crear la persona");
            }
        } catch (err) {
            setError("Error de conexión con el servidor");
            console.error("Error:", err);
        } finally {
            setCargando(false);
        }
    };

    return (
        <>
            <Header />
            <main className="max-w-3xl mx-auto px-4 py-10">
                <div className="rounded-[2rem] bg-white text-slate-900 shadow-2xl ring-1 ring-black/5 overflow-hidden">
                    <div className="p-6 md:p-10">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h1 className="text-2xl font-black tracking-tight">➕ Alta de persona</h1>
                                <p className="text-slate-600 text-sm mt-1">
                                    Crea un destinatario para enviar postales navideñas.
                                </p>
                            </div>
                        </div>

                        {/* ✅ Mensaje de éxito */}
                        {exito && (
                            <div className="mt-4 p-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                                ✅ Persona creada exitosamente. Redirigiendo...
                            </div>
                        )}

                        {/* ✅ Mensaje de error */}
                        {error && (
                            <div className="mt-4 p-3 rounded-xl bg-rose-50 text-rose-700 border border-rose-200">
                                ❌ {error}
                            </div>
                        )}

                        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-slate-700">Nombre *</label>
                                    <input
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300"
                                        placeholder="Ej: Ana"
                                        disabled={cargando}
                                    />
                                    <p className="text-xs text-slate-500 mt-1">
                                        Nombre visible en la plataforma.
                                    </p>
                                </div>

                                <div>
                                    <label className="text-sm text-slate-700">Email *</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300"
                                        placeholder="ana@email.com"
                                        disabled={cargando}
                                    />
                                    <p className="text-xs text-slate-500 mt-1">
                                        Se usará para el envío final.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-sm font-semibold">Nota</p>
                                <p className="text-sm text-slate-600 mt-1">
                                    {cargando 
                                        ? "Guardando persona..." 
                                        : "Todos los campos marcados con * son obligatorios."}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <button
                                    type="submit"
                                    disabled={cargando}
                                    className={`px-5 py-3 rounded-2xl font-extrabold ${
                                        cargando
                                            ? "bg-red-400 cursor-not-allowed"
                                            : "bg-red-600 hover:bg-red-700"
                                    } text-white`}
                                >
                                    {cargando ? "Guardando..." : "Guardar"}
                                </button>
                                
                                <button
                                    type="button"
                                    disabled={cargando}
                                    className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}