const baseURL: string = "http://localhost:3000";

export async function listarPersonas(): Promise<APIResult<Persona[]>> {
    const response = await fetch(`${baseURL}/api/personas`, {
        method: 'GET',
    });
    if (response.ok) {
        const persona: Persona[] = await response.json();
        return { ok: true, data: mascota };
    }
    const error: APIError = await response.json();
    return { ok: false, error: error };
}


/*export async function crearMascota(request: Mascota): Promise<APIResult<Mascota>> {
    const response = await fetch(`${baseURL}/api/mascotas`, {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
            'Content-type': 'application/json',
        },
    });
    if (response.ok) {
        const mascota: Mascota = await response.json();
        return { ok: true, data: mascota };
    }
    const error: APIError = await response.json();
    return { ok: false, error: error };
}

export async function eliminarMascota (chip:string):Promise<APIResult<Mascota>>{
    const response = await fetch(`${baseURL}/api/mascotas/${chip}`,{
        method:'DELETE',
    });
    if (response.ok){

        return {ok:true};
    }
    const error:APIError = await response.json();
    return {ok:false, error: error};
}*/