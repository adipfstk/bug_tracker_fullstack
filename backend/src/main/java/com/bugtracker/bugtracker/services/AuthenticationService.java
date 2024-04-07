package com.bugtracker.bugtracker.services;

import com.bugtracker.bugtracker.dto.LoginDto;

public interface AuthenticationService {
     String authenticate(LoginDto login);
}
