package com.sleepy.todo.Repository;

import com.sleepy.todo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    // This is a custom method to be implemented
    public User findByEmail(String email);
}
