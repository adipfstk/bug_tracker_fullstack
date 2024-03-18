package com.bugtracker.bugtracker.repositories;

import com.bugtracker.bugtracker.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
