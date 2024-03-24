package com.bugtracker.bugtracker.services;

import com.bugtracker.bugtracker.dto.LoginDto;
import com.bugtracker.bugtracker.dto.UserDto;
import com.bugtracker.bugtracker.models.UserEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    UserDto registerUser(UserEntity userEntity);
}
