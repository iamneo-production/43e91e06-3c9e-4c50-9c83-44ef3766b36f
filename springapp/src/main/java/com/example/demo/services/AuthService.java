package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.AuthRepository;
import com.example.demo.model.Auth;

@Service
public class AuthService {
	
	@Autowired
	public AuthRepository authrepository;
	
	public Auth saveAuth(Auth auth) {
		return authrepository.save(auth);
	}
	
}
