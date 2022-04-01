package com.examly.springapp.Service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.examly.springapp.Repository.UserDetailsRepository;
import com.examly.springapp.model.User;


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
