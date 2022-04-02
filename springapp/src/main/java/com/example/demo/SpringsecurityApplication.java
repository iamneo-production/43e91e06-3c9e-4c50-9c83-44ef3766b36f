package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.demo.dao.UserDetailsRepository;
import com.example.demo.model.Authority;
import com.example.demo.model.User;

@SpringBootApplication
public class SpringsecurityApplication {
	
	/*@Autowired
	private PasswordEncoder passwordencoder;
	
	
	@Autowired
	private UserDetailsRepository userdetailrepository;*/
	
	public static void main(String[] args) {
		SpringApplication.run(SpringsecurityApplication.class, args);
	}
	
	
	/*@PostConstruct
	protected void init() {	
		
		List<Authority>authorityList=new ArrayList<>();
		authorityList.add(createAuthority("USER","User role"));
		authorityList.add(createAuthority("ADMIN","Admin role"));
		
		User user=new User();
		user.setUsername("Vasanth");
		user.setEmail("vasanth16756@gmail.com");
		user.setPhonenumber("6379019162");
		
		user.setPassword(passwordencoder.encode("rain948"));
		user.setEnabled(true);
		user.setAuthorities(authorityList);
		
		
		userdetailrepository.save(user);
		
		
	}
	
	private Authority createAuthority(String roleCode,String roleDescription) {
		Authority authorities=new Authority();
		authorities.setRoleCode(roleCode);
		authorities.setRoleDescription(roleDescription);
		return authorities;
	}*/
	
	
}
