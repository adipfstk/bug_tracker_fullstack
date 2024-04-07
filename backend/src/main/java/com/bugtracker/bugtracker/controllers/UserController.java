package com.bugtracker.bugtracker.controllers;

import com.bugtracker.bugtracker.dto.LoginDto;
import com.bugtracker.bugtracker.dto.UserDto;
import com.bugtracker.bugtracker.models.user.UserEntity;
import com.bugtracker.bugtracker.services.AuthenticationService;
import com.bugtracker.bugtracker.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserService userService;
    private final AuthenticationService authenticationService;
    @PostMapping("/user")
    ResponseEntity<UserDto> registerUser(@RequestBody(required = true) UserEntity userEntity) {
        return new ResponseEntity<UserDto>(
                this.userService.registerUser(userEntity),
                HttpStatus.CREATED
        );
    }
    @PostMapping("/auth")
    ResponseEntity<String> authenticate(@RequestBody LoginDto loginDto) {
        return ResponseEntity.ok(this.authenticationService.authenticate(loginDto));
    }

    @GetMapping("/benchUsers")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    ResponseEntity<List<UserDto>> getAvailableUsers() {
        return ResponseEntity.ok(this.userService.getAvailableUsers());
    }
}
