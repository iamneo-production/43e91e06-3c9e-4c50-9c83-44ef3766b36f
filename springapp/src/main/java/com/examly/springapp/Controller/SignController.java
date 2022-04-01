package com.examly.springapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Auth;
import com.examly.springapp.model.Authority;

import com.examly.springapp.model.User;
import com.examly.springapp.Service.AuhtorityService;
import com.examly.springapp.Service.AuthService;
import com.examly.springapp.Service.RegisterService;

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
	
	@GetMapping("/{username}")
	public User getUserByName(@PathVariable String username) {
		return registerservice.getUserByName(username);
	}

}
