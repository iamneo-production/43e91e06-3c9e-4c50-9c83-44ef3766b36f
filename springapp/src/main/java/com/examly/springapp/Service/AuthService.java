package com.examly.springapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Repository.AuthRepository;
import com.examly.springapp.model.Auth;

@Service
public class AuthService {
	
	@Autowired
	public AuthRepository authrepository;
	
	public Auth saveAuth(Auth auth) {
		return authrepository.save(auth);
	}
	
}
