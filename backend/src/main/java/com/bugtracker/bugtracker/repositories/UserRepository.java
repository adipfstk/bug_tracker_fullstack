package com.bugtracker.bugtracker.repositories;

import com.bugtracker.bugtracker.models.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByUsername(String username);
}
