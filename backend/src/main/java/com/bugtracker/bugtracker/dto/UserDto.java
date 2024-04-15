package com.bugtracker.bugtracker.dto;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDto {
    private String username;
    private String email;
}
