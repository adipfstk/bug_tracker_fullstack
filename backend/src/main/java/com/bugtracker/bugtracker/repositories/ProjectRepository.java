package com.bugtracker.bugtracker.repositories;

import com.bugtracker.bugtracker.models.project.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    Optional<Project> findByName(String name);
}
