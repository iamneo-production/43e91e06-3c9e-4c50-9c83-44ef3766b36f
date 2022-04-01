package com.examly.springapp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Repository.AuthorityRepository;
import com.examly.springapp.model.Authority;

@Service
public class AuhtorityService {
	
	@Autowired
	public AuthorityRepository authorityrepository;
	
	public Authority saveAuthority(Authority auth) {
		return authorityrepository.save(auth);
	}
}
