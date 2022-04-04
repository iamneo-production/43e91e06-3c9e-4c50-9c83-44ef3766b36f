package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.AuthRepository;
import com.example.demo.dao.AuthorityRepository;
import com.example.demo.dao.UserDetailsRepository;
import com.example.demo.model.Auth;
import com.example.demo.model.Authority;
import com.example.demo.model.User;


@Service
public class RegisterService {
	
	@Autowired
	public AuthorityRepository authorityrepository;
	
	@Autowired
	public UserDetailsRepository userdetailsrepository;
	
	@Autowired
	public AuthRepository authrepository;
	
	public User saveUser(User user) throws Exception{
		User local = this.userdetailsrepository.findByUsername(user.getUsername());
		if(local!=null) {
			System.out.println("User is already there!!");
            throw new Exception("User exits ");
		}
		else {
			local = userdetailsrepository.save(user);
		}
		return local;
	}
	
	public List<User>getUsers(){
		return userdetailsrepository.findAll();
	}
	
	

}
