package com.sleepy.todo.Controller;

import com.sleepy.todo.Service.UserService;
import com.sleepy.todo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/todo") // I dont get this
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/test")
    public String testConnection() {
        return "Test successful!";
    }
    @GetMapping("/user/{email}")
    public User findUserByEmail(@PathVariable String email) {
        return userService.findUserByEmail(email);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/messages")
    public ResponseEntity<List<String>> messages() {
        return ResponseEntity.ok(Arrays.asList("first","second"));
    }

}
