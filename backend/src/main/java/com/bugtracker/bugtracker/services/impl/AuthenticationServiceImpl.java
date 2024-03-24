package com.bugtracker.bugtracker.services.impl;

import com.bugtracker.bugtracker.dto.LoginDto;
import com.bugtracker.bugtracker.security.utils.JwtUtil;
import com.bugtracker.bugtracker.services.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    @Override
    public String authenticate(LoginDto login) {
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                login.getUsername(),
                login.getPassword()
        );
        var token = authenticationManager.authenticate(authentication);
        return this.jwtUtil.generateToken(login.getUsername());
    }
}
