package com.navidam.api.jpa.repository;

import com.navidam.api.jpa.entity.PersonaEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonaRepository extends JpaRepository<PersonaEntity,Long> {
}
