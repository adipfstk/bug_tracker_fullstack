package com.bugtracker.bugtracker.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="projects")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column (length = 20)
    @NonNull
    private String name;
    @NonNull
    private String description;
}
