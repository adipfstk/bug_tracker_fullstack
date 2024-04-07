package com.bugtracker.bugtracker.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class Ticket {
    private String title;
    private String description;
    @Enumerated(EnumType.STRING)
    private Priority priority;
    @ManyToOne
    Project project;
    @ManyToOne
    UserEntity userEntity;

}
