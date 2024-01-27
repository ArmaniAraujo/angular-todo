package com.sleepy.todo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class TodosApplication {

	public static void main(String[] args) {
		String salt = "f1nd1ngn3m0";
		String password = "potato";
		String attemptPassword = new BCryptPasswordEncoder().encode(password);
		System.out.println(attemptPassword);

		if (BCrypt.checkpw(password, "$2a$10$TzVsf2OLMrZj2XgtTXIRh.HMm0SUQi8cjqSGA8n1iDg/9qkr/pMeK"))
			System.out.println("youre in!!!");
		else
			System.out.println("sorry...");





		SpringApplication.run(TodosApplication.class, args);
	}

}
