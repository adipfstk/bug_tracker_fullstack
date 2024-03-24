package com.bugtracker.bugtracker.dto;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class UserDto {
    private String username;
    private String email;
}
