package com.example.SpringBoot.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.SpringBoot.Repository.UserRepository;
import com.example.SpringBoot.model.User;

@Service
public class UserService {
@Autowired
public UserRepository repo;
public User saveUsers(User u) {
	return repo.save(u);
}

//get
public List<User> getUsers(){
	List<User> u=new ArrayList<>();
	repo.findAll().forEach(users->u.add(users));
	return u;
}

public User saveUsers(String username) {
	// TODO Auto-generated method stub
	return repo.findByusername(username);
}

public User getuserById(int id) {
	Optional<User> u=repo.findById(id);
	return u.get();
}

public User getUserById(int id) {
	Optional <User> u=repo.findById(id);
	return u.get();
	
}

public User UpdateById(User u) {
	if(getUserById(u.getId())==null) {
		return null;
	}
	
	User user=repo.save(u);
	return user;
}

public User updatename(String username,User u) {
	// TODO Auto-generated method stub
	User prev_user=new User();
	prev_user=repo.findByusername(username);
	prev_user.setPassword(u.getPassword());
	prev_user.setConfirmpassword(u.getConfirmpassword());
	prev_user.setEmail(u.getEmail());
	prev_user.setMobilenumber(u.getMobilenumber());
	prev_user.setUserrole(u.getUserrole());
	return repo.save(prev_user);
	
}

@Transactional
public String deletename(String username) {
	// TODO Auto-generated method stub
	repo.deleteByusername(username);
	return "deleted successfully";
}

@Transactional
public String deleteById(int id) {
	// TODO Auto-generated method stub
	repo.deleteById(id);
	return "deleted successfully";
}






}
