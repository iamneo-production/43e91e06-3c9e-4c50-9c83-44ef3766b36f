package com.example.SpringBoot.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SpringBoot.Repository.UserRepository;
import com.example.SpringBoot.model.User;

@Service
public class LoginService {
	
	@Autowired
	private UserRepository repo;
	
	public User getUserByEmailAndPassword(String email,String password) {
		Optional <User> u=repo.findByEmailAndPassword(email,password);
		return u.get();
	}

}