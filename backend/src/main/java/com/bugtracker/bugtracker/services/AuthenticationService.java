package com.bugtracker.bugtracker.services;

import com.bugtracker.bugtracker.dto.LoginDto;

public interface AuthenticationService {
    public String authenticate(LoginDto login);
}
