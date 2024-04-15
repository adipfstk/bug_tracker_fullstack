package com.bugtracker.bugtracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class ProjectDto {
    public String description;
    public String name;
    List<String> usernames;
}
