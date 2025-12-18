package com.navidam.api.service;

public interface PersonaService {
    public List<PersonaResponse> listaPersonas();
    PersonaResponse getPersona(Long id);
    
    void eliminarPersona(Long id);
}
