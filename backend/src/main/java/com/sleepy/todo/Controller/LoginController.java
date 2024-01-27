package com.sleepy.todo.Controller;

import com.sleepy.todo.Service.UserService;
import com.sleepy.todo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

@RestController
@RequestMapping("api/todo/login") // I dont get this
public class LoginController {

    /**
     * need username + password
     * take and compare to table
     * if good, return object with a user
     * if not, return null and let frontend deal with it
     */

    /*
        How salting works (on login):
        1. Check if username exists, if it does, retrieve user information incl. hashed password and salt
        2. Check if our userpassword+salt+hashed = stored password
        3. If yes, send user logged in notice to frontend

        4. Have frontend retrieve todos based on login token or whatever
     */


    private UserService userService;

//    @RequestMapping("api/todo/login/auth/{username}/{password}")
//    public User authenticateUser (@PathVariable String username, @PathVariable String password) {
//        User user = userService.findUserByUsername(username);
//
//        // If a user with that username exists, move on to logging in
//        if (user != null) {
//            String attemptPassword = new BCryptPasswordEncoder().encode(user.getSalt() + password);
//
//            if (attemptPassword.equals(user.getHashed_password())) {
//                return user;
//            }
//            // we return null at the end anyways
//        }
//        return null;
//    }

    @GetMapping("api/todo/login/auth/")
    public User getResource(@RequestHeader("Authorization") String authorizationHeader ) {
        String base64Credentials = authorizationHeader.substring("Basic".length()).trim();
        String credentials = new String(Base64.getDecoder().decode(base64Credentials));
        final String[] values = credentials.split(":", 2);
        String username = values[0];
        String password = values[1];

        User user = userService.findUserByUsername(username);

        // If a user with that username exists, move on to logging in
        if (user != null) {
            String attemptPassword = new BCryptPasswordEncoder().encode(user.getSalt() + password);

            if (attemptPassword.equals(user.getHashed_password())) {
                return user;
            }
            // we return null at the end anyways
        }
        return null;

    }
}
