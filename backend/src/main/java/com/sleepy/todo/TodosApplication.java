package com.sleepy.todo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class TodosApplication {


	public static void main(String[] args) {
		SpringApplication.run(TodosApplication.class, args);
	}

}

