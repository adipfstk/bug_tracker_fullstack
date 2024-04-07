package com.bugtracker.bugtracker.repositories;

import com.bugtracker.bugtracker.models.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    Optional<UserEntity> findByUsername(String username);

    @Query(value = "SELECT * FROM users WHERE project_id IS NULL", nativeQuery = true)
    Optional<List<UserEntity>> findBenchUsers();
}
