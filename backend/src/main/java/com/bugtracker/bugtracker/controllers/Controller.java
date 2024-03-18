package com.bugtracker.bugtracker.controllers;

import com.bugtracker.bugtracker.models.Project;
import com.bugtracker.bugtracker.services.ProjectService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1")
class Controller {
    private final ProjectService _projectService;

    @GetMapping("/items")
    public ResponseEntity<Page<Project>> getProjects(@RequestParam(required = false, defaultValue = "0") int page,
                                                     @RequestParam(required = false, defaultValue = "5") int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return ResponseEntity.ok(this._projectService.getAllProjects(pageRequest));
    }

}
