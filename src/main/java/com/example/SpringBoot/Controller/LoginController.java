package com.example.SpringBoot.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringBoot.Service.LoginService;
import com.example.SpringBoot.model.User;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController {
	@Autowired
	private LoginService service;
	
	@GetMapping("/{email}/{password}")
	public User getByEmailAndPassword(@PathVariable String email,@PathVariable String password){
	
		User u=service.getUserByEmailAndPassword(email, password);
		if(u!=null) {
			System.out.print("true");
		}
		return u;
	}
}