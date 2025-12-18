package com.navidam.api.service.Impl;

import com.navidam.api.dto.request.PersonaRequest;
import com.navidam.api.dto.response.PersonaResponse;
import com.navidam.api.jpa.repository.PersonaRepository;
import com.navidam.api.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaServiceImpl  implements PersonaService {
    private final PersonaRepository personaRepository;

    @Autowired
    public PersonaServiceImpl (PersonaRepository personaRepository){
        this.personaRepository = personaRepository;
    }

    @Override
    public List<PersonaResponse> listaPersonas(){
        return personaRepository.findAll().stream()
                .map(p -> new PersonaResponse(p.getId(), p.getNombre(), p.getEmail()))
                .toList();
    }

    @Override
    public PersonaResponse getPersona(Long id) {

        return null;
    }

    @Override
    public PersonaResponse getPersonaEmail(String email) {
        return null;
    }

    @Override
    public PersonaResponse crearPersona(PersonaRequest request) {
     

        return null;
    }

    @Override
    public void eliminarPersona(Long id){this.personaRepository.deleteById(id);}

    
}
