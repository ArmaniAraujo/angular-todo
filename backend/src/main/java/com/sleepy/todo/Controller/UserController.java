package com.sleepy.todo.Controller;

import com.sleepy.todo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/todo")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/test")
    public String testConnection() {
        return "Test successful!";
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/testfront")
    public String testFront() {
        return "Test frontend request successful!";
    }
}
