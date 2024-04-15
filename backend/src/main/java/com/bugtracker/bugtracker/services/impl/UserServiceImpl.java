package com.bugtracker.bugtracker.services.impl;

import com.bugtracker.bugtracker.dto.UserDto;
import com.bugtracker.bugtracker.exception.NoProjectFoundException;
import com.bugtracker.bugtracker.exception.NoUserFoundException;
import com.bugtracker.bugtracker.models.user.UserEntity;
import com.bugtracker.bugtracker.repositories.ProjectRepository;
import com.bugtracker.bugtracker.repositories.UserRepository;
import com.bugtracker.bugtracker.services.UserService;
import com.bugtracker.bugtracker.utils.Constants;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
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
    private final ProjectRepository projectRepository;
    private final ModelMapper modelMapper;

    @Override
    public UserDto registerUser(UserEntity userEntity) {
        userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
        return this.toUserDto(this.userRepository.save(userEntity));
    }

    @Override
    public List<UserDto> getAvailableUsers() {
        return userRepository.findBenchUsers()
                .orElse(List.of())
                .stream()
                .map(this::toUserDto)
                .collect(Collectors.toList());
    }

    @Override
    public Page<UserDto> getProjectUsers(String projectName, Pageable pageRequest) {
        var dbProject = projectRepository
                .findByName(projectName)
                .orElseThrow(() -> new NoProjectFoundException(Constants.NO_PROJECT_DB));

        Page<UserEntity> usersPage = userRepository.findAllByProjectId(dbProject.getId(), pageRequest);

        return new PageImpl<>(usersPage.stream()
                .map(this::toUserDto)
                .collect(Collectors.toList()), pageRequest, usersPage.getTotalElements());
    }


    public UserEntity toUserEntity(UserDto userDto) {
        return this.modelMapper.map(userDto, UserEntity.class);
    }

    public UserDto toUserDto(UserEntity userEntity) {
        return this.modelMapper.map(userEntity, UserDto.class);
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
