package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	public User addUser(@RequestBody User user) {
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
	public List<User> findAllUsers() {
		return registerservice.getUsers();
	}

	@GetMapping("{username}")
	public ResponseEntity<User> findByUser(@PathVariable String username) {
		return ResponseEntity.ok(registerservice.findByUsername(username));
	}

	@PutMapping("/update/{username}")
	public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable String username) {
		User users = registerservice.findByUsername(username);
		users.setUsername(user.getUsername());
		users.setPassword(user.getPassword());
		users.setEmail(user.getEmail());
		users.setPhonenumber(user.getPhonenumber());
		users.setEnabled(user.isEnabled());
		User update = registerservice.saveUser(users);
		return ResponseEntity.ok(update);
	}
}
