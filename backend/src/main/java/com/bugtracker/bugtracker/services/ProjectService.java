package com.bugtracker.bugtracker.services;

import com.bugtracker.bugtracker.dto.ProjectDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface ProjectService {
    Page<ProjectDto> getAllProjects(PageRequest pageRequest);
    ProjectDto saveProject(ProjectDto projectDto);


}
