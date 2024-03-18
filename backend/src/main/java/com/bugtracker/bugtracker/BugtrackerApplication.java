package com.bugtracker.bugtracker;

import com.bugtracker.bugtracker.models.Project;
import com.bugtracker.bugtracker.repositories.ProjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class BugtrackerApplication {

    @Bean
    CommandLineRunner commandLineRunner(ProjectRepository projectRepository) {
        return args -> {
            List<Project> projectList = new ArrayList<>();
            for (int i = 0; i < 10; i++) {
                projectList.add(new Project(0, "Project " + i, "This is a cool project"));
            }
            projectRepository.saveAll(projectList);
        };
    }
    public static void main(String[] args) {
        SpringApplication.run(BugtrackerApplication.class, args);
    }
}
