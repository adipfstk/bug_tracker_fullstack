package com.bugtracker.bugtracker.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@AllArgsConstructor
@Getter
@Setter
public class ProjectDto {
    public String description;
    public String name;
    List<String> usernames;
}
