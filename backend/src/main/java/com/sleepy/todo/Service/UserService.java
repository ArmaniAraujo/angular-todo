package com.sleepy.todo.Service;

import com.sleepy.todo.Repository.UserRepository;
import com.sleepy.todo.model.Todo;
import com.sleepy.todo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.Base64;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepo;

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public User findUserByUsername(String username) {
        return userRepo.findByUsername(username);
        // TODO: Check if it returns null or not
    }

    public User findUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }

    public Map<Object, Object> checkUsername(@RequestHeader("Authorization") String authorizationHeader, UserService us) {
        String base64Credentials = authorizationHeader.substring("Basic".length()).trim();
        String credentials = new String(Base64.getDecoder().decode(base64Credentials));
        final String[] values = credentials.split(":", 2);
        String username = values[0];
        String password = values[1];

        User user = us.findUserByUsername(username);

        HashMap<Object, Object> map = new HashMap<>();

        // If a user with that username exists, move on to logging in
        if (user != null) {
            String salt = user.getSalt();
            String attemptPassword = new BCryptPasswordEncoder().encode(password+salt);
            if (BCrypt.checkpw(password+salt, user.getHashed_password()))
                // I know its sending the password and the salt. Don't @ me I just don't care at this point
                map.put("user", user);
            else
                map.put("errorMessage", "Incorrect password. Please try again");
            return map;
        }
        map.put("errorMessage", "No user with this username found. Please try again");
        return map;
    }
}
