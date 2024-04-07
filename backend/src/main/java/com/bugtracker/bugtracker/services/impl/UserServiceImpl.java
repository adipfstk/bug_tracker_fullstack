package com.bugtracker.bugtracker.services.impl;

import com.bugtracker.bugtracker.dto.UserDto;
import com.bugtracker.bugtracker.exception.NoUserFoundException;
import com.bugtracker.bugtracker.models.user.UserEntity;
import com.bugtracker.bugtracker.repositories.UserRepository;
import com.bugtracker.bugtracker.services.UserService;
import com.bugtracker.bugtracker.utils.Constants;
import lombok.AllArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDto registerUser(UserEntity userEntity) {
        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
        return this.userDtoMapper(this.userRepository.save(userEntity));
    }

    @Override
    public List<UserDto> getAvailableUsers() {
        return userRepository.findBenchUsers()
                .orElse(List.of())
                .stream()
                .map(this::userDtoMapper)
                .collect(Collectors.toList());
    }

    private UserDto userDtoMapper(UserEntity userEntity) {
        return UserDto.builder()
                .username(userEntity.getUsername())
                .email(userEntity.getEmail())
                .build();
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = this.userRepository.findByUsername(username)
                .orElseThrow(() -> new NoUserFoundException(Constants.NO_USER_DB));
        return
                new User(user.getUsername(),
                        user.getPassword(),
                        List.of(new SimpleGrantedAuthority(user.getRole().toString())));
    }
}
