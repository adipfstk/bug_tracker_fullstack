package com.bugtracker.bugtracker.controllers;

import com.bugtracker.bugtracker.dto.ProjectDto;
import com.bugtracker.bugtracker.dto.UserDto;
import com.bugtracker.bugtracker.services.ProjectService;
import com.bugtracker.bugtracker.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1")
@PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
@CrossOrigin(origins = "http://localhost:4200")
class ProjectsController {
    private final ProjectService _projectService;
    private final UserService _userService;

    @GetMapping("/projects")
    public ResponseEntity<Page<ProjectDto>> getProjects(@RequestParam(required = false, defaultValue = "0") int page,
                                                        @RequestParam(required = false, defaultValue = "5") int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return ResponseEntity.ok(this._projectService.getAllProjects(pageRequest));
    }

    @PostMapping("/project")
    public ResponseEntity<ProjectDto> addProject(@RequestBody ProjectDto project) {
        return ResponseEntity.ok(this._projectService.saveProject(project));
    }

    @GetMapping("/project-members")
    public ResponseEntity<Page<UserDto>> getProjectMembers(@RequestParam(required = true) String projectName,
                                                           @RequestParam(required = false, defaultValue = "0") int page,
                                                           @RequestParam(required = false, defaultValue = "5") int size) {
        Pageable pageRequest = PageRequest.of(page, size);
        return ResponseEntity.ok(this._userService.getProjectUsers(projectName, pageRequest));
    }

}
