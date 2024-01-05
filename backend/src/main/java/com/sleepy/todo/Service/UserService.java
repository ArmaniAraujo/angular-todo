package com.sleepy.todo.Service;

import com.sleepy.todo.Repository.UserRepository;
import com.sleepy.todo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public User findUser(Long id) {
        return userRepo.findById(id).orElse(null);
    }

    public User findUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }
}
