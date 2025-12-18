package com.navidam.api.mapper;

import com.navidam.api.dto.request.PersonaRequest;
import com.navidam.api.dto.response.PersonaResponse;
import com.navidam.api.jpa.entity.PersonaEntity;

public class PersonaMapper {
    public  static PersonaResponse mapPersonaToPersonaResponse(PersonaEntity personaEntity){
        return new PersonaResponse(
                personaEntity.getId(),
                personaEntity.getNombre(),
                personaEntity.getEmail()
        );
    }

    public static PersonaEntity personaRequestToPersonaEntity(PersonaRequest request){
        return new PersonaEntity(
                request.id(),
                request.nombre(),
                request.email()
        );
    }
}


