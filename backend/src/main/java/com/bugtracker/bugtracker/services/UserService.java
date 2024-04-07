package com.bugtracker.bugtracker.services;

import com.bugtracker.bugtracker.dto.UserDto;
import com.bugtracker.bugtracker.models.user.UserEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    UserDto registerUser(UserEntity userEntity);
    List<UserDto> getAvailableUsers();
}
