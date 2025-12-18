package com.navidam.api.service;

import com.navidam.api.dto.response.PersonaResponse;

import java.util.List;

public interface PersonaService {
    public List<PersonaResponse> listaPersonas();
    PersonaResponse getPersona(Long id);
    
    void eliminarPersona(Long id);
}
