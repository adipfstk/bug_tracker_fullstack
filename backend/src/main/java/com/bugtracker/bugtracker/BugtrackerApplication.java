package com.bugtracker.bugtracker;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BugtrackerApplication {
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
    public static void main(String[] args) {
        SpringApplication.run(BugtrackerApplication.class, args);
    }
}
