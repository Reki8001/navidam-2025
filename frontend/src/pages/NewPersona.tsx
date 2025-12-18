import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NewPerson(){
    return(
        <>
        <Header/>
        <main className="max-w-3xl mx-auto px-4 py-10">
    <div className="rounded-[2rem] bg-white text-slate-900 shadow-2xl ring-1 ring-black/5 overflow-hidden">
        <div className="p-6 md:p-10">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black tracking-tight">➕ Alta de persona</h1>
                    <p className="text-slate-600 text-sm mt-1">Crea un destinatario para enviar postales navideñas.</p>
                </div>


            </div>

            <form className="mt-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-sm text-slate-700">Nombre</label>
                        <input required className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300"
                               placeholder="Ej: Ana"/>
                        <p className="text-xs text-slate-500 mt-1">Nombre visible en la plataforma.</p>
                    </div>

                    <div>
                        <label className="text-sm text-slate-700">Email</label>
                        <input type="email" required className="mt-1 w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300"
                               placeholder="ana@email.com"/>
                        <p className="text-xs text-slate-500 mt-1">Se usará para el envío final.</p>
                    </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold">Nota</p>
                    <p className="text-sm text-slate-600 mt-1">Validaciones y mensajes de éxito/error se gestionan en React.</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                    <button className="px-5 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold">
                        Guardar
                    </button>
                    <a href="/personas" className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold">
                        Cancelar
                    </a>
                </div>
            </form>
        </div>
    </div>
</main>
        <Footer/>
        </>
    )
}