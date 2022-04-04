package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.AuthorityRepository;
import com.example.demo.model.Authority;

@Service
public class AuhtorityService {
	
	@Autowired
	public AuthorityRepository authorityrepository;
	
	public Authority saveAuthority(Authority auth) {
		return authorityrepository.save(auth);
	}
}
