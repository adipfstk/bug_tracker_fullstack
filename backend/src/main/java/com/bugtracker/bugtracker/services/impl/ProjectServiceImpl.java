package com.bugtracker.bugtracker.services.impl;

import com.bugtracker.bugtracker.dto.ProjectDto;
import com.bugtracker.bugtracker.exception.NoUserFoundException;
import com.bugtracker.bugtracker.models.project.Project;
import com.bugtracker.bugtracker.models.user.UserEntity;
import com.bugtracker.bugtracker.repositories.ProjectRepository;
import com.bugtracker.bugtracker.repositories.UserRepository;
import com.bugtracker.bugtracker.services.ProjectService;
import com.bugtracker.bugtracker.utils.Constants;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ProjectServiceImpl implements ProjectService {
    private final ProjectRepository _projectRepository;
    private final UserRepository _userRepository;
    @Override
    public Page<Project> getAllProjects(PageRequest pageRequest) {
        return this._projectRepository.findAll(pageRequest);
    }

    @Override
    public ProjectDto saveProject(ProjectDto projectDto) {
        var dbProject = this._projectRepository.save(projectMapper(projectDto));
        this.setUsersProjects(projectDto.getUsernames(), dbProject);
        this._projectRepository.save(dbProject);
        return projectDto;
    }

    private void setUsersProjects(List<String> members, Project project) {
        List<UserEntity> users = new ArrayList<>();
        members.forEach(member -> {
            var dbUser = this.findUserInstanceByUsername(member);
            dbUser.setProject(project);
            this._userRepository.save(dbUser);
        });
    }

    private Project projectMapper(ProjectDto projectDto) {
        Project project = new Project();
        project.setName(projectDto.getName());
        project.setDescription(projectDto.getDescription());
        project.setId(0L);
        return project;
    }

    private UserEntity findUserInstanceByUsername(String username) {
        return this._userRepository
                .findByUsername(username)
                .orElseThrow(()->new NoUserFoundException(Constants.NO_USER_DB));

    }
}
