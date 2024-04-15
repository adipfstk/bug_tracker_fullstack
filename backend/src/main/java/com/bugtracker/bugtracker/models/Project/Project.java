package com.bugtracker.bugtracker.models.project;

import com.bugtracker.bugtracker.models.user.UserEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
