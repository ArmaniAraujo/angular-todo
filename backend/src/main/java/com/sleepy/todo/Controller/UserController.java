package com.sleepy.todo.Controller;

import com.sleepy.todo.Service.UserService;
import com.sleepy.todo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

@GetMapping("/user/{email}")
public User findUserByEmail(@PathVariable String email) {
    return userService.findUserByEmail(email);
}

}
