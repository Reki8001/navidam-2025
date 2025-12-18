import type { APIError, APIResult } from "@/services/api.ts";
import type { Persona } from "@/types/Personas";

const baseURL: string = "http://localhost:3000";

export async function listarPersonas(): Promise<APIResult<Persona[]>> {
    const response = await fetch(`${baseURL}/api/personas`, {
        method: 'GET',
    });
    if (response.ok) {
        const persona: Persona[] = await response.json();
        return { ok: true, data: persona };
    }
    const error: APIError = await response.json();
    return { ok: false, error: error };
}


export async function crearPersona(request: Persona): Promise<APIResult<Persona>> {
    const response = await fetch(`${baseURL}/api/personas`, {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
            'Content-type': 'application/json',
        },
    });
    if (response.ok) {
        const persona: Persona = await response.json();
        return { ok: true, data: persona };
    }
    const error: APIError = await response.json();
    return { ok: false, error: error };
}

export async function eliminarPersona (id: number):Promise<APIResult<Persona>>{
    const response = await fetch(`${baseURL}/api/personas/${id}`,{
        method:'DELETE',
    });
    if (response.ok){

        return {ok:true};
    }
    const error:APIError = await response.json();
    return {ok:false, error: error};
}