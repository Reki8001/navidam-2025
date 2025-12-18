package com.navidam.api.web.controller;

import com.navidam.api.dto.response.PersonaResponse;
import com.navidam.api.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class PersonaController {

    private final PersonaService personaService;

    @Autowired
    public PersonaController(PersonaService personaService) {
        this.personaService = personaService;
    }

    public List<PersonaResponse> getPersonas() {
        return this.personaService.listaPersonas();
    }
}
