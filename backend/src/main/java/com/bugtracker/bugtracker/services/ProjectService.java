package com.bugtracker.bugtracker.services;

import com.bugtracker.bugtracker.models.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

public interface ProjectService {
    Page<Project> getAllProjects(PageRequest pageRequest);
}
