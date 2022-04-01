package com.examly.springapp.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Repository.AuthRepository;
import com.examly.springapp.Repository.AuthorityRepository;
import com.examly.springapp.Repository.UserDetailsRepository;
import com.examly.springapp.model.Auth;
import com.examly.springapp.model.Authority;
import com.examly.springapp.model.User;

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
	
	public User getUserByName(String username) {
		return(userdetailsrepository.findByUsername(username));
	}
	
	

}
