package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Auth;
import com.example.demo.model.Authority;

import com.example.demo.model.User;
import com.example.demo.services.AuhtorityService;
import com.example.demo.services.AuthService;
import com.example.demo.services.RegisterService;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")

public class SignController {
	
	@Autowired
	public RegisterService registerservice;
	
	@Autowired
	public AuhtorityService authorityservice;
	
	@Autowired
	public AuthService authservice;
	
	@PostMapping("/addUser")
	public User addUser(@RequestBody User user) throws Exception{
		return registerservice.saveUser(user);
	}
	
	@PostMapping("/addAuthority")
	public Authority addAuthority(@RequestBody Authority authority) {
		return authorityservice.saveAuthority(authority);
	}
	
	@PostMapping("/addAuth")
	public Auth addAuth(@RequestBody Auth auth) {
		return authservice.saveAuth(auth);
	}
	
	@GetMapping("/viewusers")
	public List<User>findAllUsers(){
		return registerservice.getUsers();
	}

}
