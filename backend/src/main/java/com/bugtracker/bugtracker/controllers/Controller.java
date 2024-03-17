package com.bugtracker.bugtracker.controllers;


import com.bugtracker.bugtracker.models.Project;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1")
public class Controller {
    @GetMapping("/get")
    public ResponseEntity<Project> getResponse() {
        return ResponseEntity.ok(new Project(1, "Adrian", "Ba, se pare ca merge"));
    }
}
