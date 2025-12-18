import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Personas() {
    return <>
       <Header/>
        <main className="max-w-6xl mx-auto px-4 py-10">
    <div className="rounded-[2rem] bg-white text-slate-900 shadow-2xl ring-1 ring-black/5 overflow-hidden">
        <div className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-black tracking-tight">Personas registradas</h1>
                    <p className="text-slate-600 text-sm mt-1">
                        Elimina personas directamente desde el listado.
                    </p>
                </div>

                <div className="flex gap-2">
                    <input
                            className="w-full md:w-80 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-red-300"
                            placeholder="Buscar por nombre o email"
                    />
                    <button className="px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold">
                        🔄
                    </button>
                </div>
            </div>

            <section className="rounded-3xl border border-slate-200 overflow-hidden">
                <div className="p-4 md:p-6 flex items-center justify-between bg-slate-50">
                    <p className="text-sm text-slate-700">Listado</p>

                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 text-slate-600">
                        <tr>
                            <th className="text-left px-4 py-3">Nombre</th>
                            <th className="text-left px-4 py-3">Email</th>
                            <th className="text-left px-4 py-3 w-[340px]">Acciones</th>
                        </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-200">
                        <tr className="hover:bg-slate-50">
                            <td className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-9 w-9 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                                        <span>👤</span>
                                    </div>
                                    <div>
                                        <p className="font-semibold">[Nombre]</p>
                                        <p className="text-xs text-slate-500">ID: [id]</p>
                                    </div>
                                </div>
                            </td>

                            <td className="px-4 py-3 text-slate-700">[Email]</td>

                            <td className="px-4 py-3">
                                <div className="flex flex-wrap gap-2">
                                    <button className="px-3 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 font-semibold text-slate-900">
                                        🗑️ Eliminar
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="p-6 text-center text-slate-500">
                    (React mostrará aquí “No hay personas registradas” cuando aplique)
                </div>
            </section>
        </div>
    </div>
</main>
    <Footer/>

    </>
}