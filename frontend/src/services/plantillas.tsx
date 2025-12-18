import type {APIError, APIResult} from "@/services/api.ts";
import type {Plantilla} from "@/types/Plantilla.tsx";

const baseURL :string="http://localhost:8080";

export async function listadoPlantillas ():Promise<APIResult<Plantilla[]>>{
    const response = await fetch(`${baseURL}/api/plantillas`,{
        method:'GET',
        headers:{
            'Accept':'application/json',
        },
    });
    if (response.ok){
        const plantillas:Plantilla[] =  await response.json();
        return {ok:true, data:plantillas};
    }
    const error:APIError = await response.json();
    return {ok:false, error: error};
}