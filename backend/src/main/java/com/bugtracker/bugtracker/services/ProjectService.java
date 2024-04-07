package com.bugtracker.bugtracker.services;

import com.bugtracker.bugtracker.dto.ProjectDto;
import com.bugtracker.bugtracker.models.project.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface ProjectService {
    Page<Project> getAllProjects(PageRequest pageRequest);
    ProjectDto saveProject(ProjectDto projectDto);

}
