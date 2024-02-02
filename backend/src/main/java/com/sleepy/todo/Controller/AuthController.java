package com.sleepy.todo.Controller;

import com.sleepy.todo.Service.TodoService;
import com.sleepy.todo.Service.UserService;
import com.sleepy.todo.model.Todo;
import com.sleepy.todo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/todo/")
public class AuthController {

    @Autowired
    private final UserService us;
    @Autowired
    private final TodoService ts;

    public AuthController(UserService us, TodoService ts) {
        this.us = us;
        this.ts = ts;
    }

    /**
     * Authenticates username/password and returns user object from db to frontend
     *
     * @param authorizationHeader
     * @return User object from db
     */

    @GetMapping("/auth")
    @CrossOrigin(origins="http://localhost:4200")
    public Map<Object, Object> authenticateUser(@RequestHeader("Authorization") String authorizationHeader ) {
        System.out.println("Received request from frontend...");
        // Method exists in UserService
        Map<Object, Object> usernameVerificationResponse = us.checkUsername(authorizationHeader, us);
        return usernameVerificationResponse;
    }
}
