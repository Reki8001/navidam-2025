package com.navidam.api.web.controller;

import com.navidam.api.dto.response.PersonaResponse;
import com.navidam.api.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

     @GetMapping("/personas/{id}")
    public PersonaResponse getPersona(@PathVariable Long id){return this.personaService.getPersona(id);}

    @GetMapping("/personas/{email}")
    public PersonaResponse getPersonaEmail(@PathVariable String email){return this.personaService.getPersonaEmail(email);}
}
