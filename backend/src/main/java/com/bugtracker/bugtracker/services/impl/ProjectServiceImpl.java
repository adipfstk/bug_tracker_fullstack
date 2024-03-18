package com.bugtracker.bugtracker.services.impl;

import com.bugtracker.bugtracker.models.Project;
import com.bugtracker.bugtracker.repositories.ProjectRepository;
import com.bugtracker.bugtracker.services.ProjectService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService {
    private final ProjectRepository _projectRepository;
    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this._projectRepository = projectRepository;
    }
    @Override
    public Page<Project> getAllProjects(PageRequest pageRequest) {
        return this._projectRepository.findAll(pageRequest);
    }
}
