package com.navidam.api.service.Impl;

import com.navidam.api.dto.request.PersonaRequest;
import com.navidam.api.dto.response.PersonaResponse;
import com.navidam.api.jpa.entity.PersonaEntity;
import com.navidam.api.jpa.repository.PersonaRepository;
import com.navidam.api.mapper.PersonaMapper;
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
        List<PersonaEntity> personas = this.personaRepository.findAll();
        return personas.stream().map(PersonaMapper::mapPersonaToPersonaResponse).toList();
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
        PersonaEntity persona = PersonaMapper.personaRequestToPersonaEntity(request);
        PersonaEntity result = this.personaRepository.save(persona);
        return PersonaMapper.mapPersonaToPersonaResponse(result);
    }

    @Override
    public void eliminarPersona(Long id){this.personaRepository.deleteById(id);}

    
}
