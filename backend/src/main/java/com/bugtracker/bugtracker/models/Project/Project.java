package com.bugtracker.bugtracker.models.project;

import com.bugtracker.bugtracker.models.user.UserEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

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
    private String name;
    private String description;
    @OneToMany(mappedBy = "project")
    List<UserEntity> users;
}
