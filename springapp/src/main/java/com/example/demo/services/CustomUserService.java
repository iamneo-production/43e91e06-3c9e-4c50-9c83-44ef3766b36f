package com.example.demo.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.dao.UserDetailsRepository;
import com.example.demo.model.User;


@Service
public class CustomUserService implements UserDetailsService{
	@Autowired
	
	UserDetailsRepository userdetailrepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user=userdetailrepository.findByUsername(username);
		
		if(null==user) {
			throw new UsernameNotFoundException("User Not Found With username"+username);
		}
		return user;
		
	}
	
	

}
