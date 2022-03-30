package com.example.SpringBoot.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.SpringBoot.Service.UserService;
import com.example.SpringBoot.model.User;

@RestController
@CrossOrigin("*")
@RequestMapping("/users")
public class userController {
	
	@Autowired
	public UserService controller;
	
	@GetMapping("/{id}")
	public User getUserByIdDetails(@PathVariable int id) {
		return controller.getUserById(id);
	}
	
	@GetMapping("/view")
	public List<User> findAllUsers(){
		return controller.getUsers();	
	}
	
	@PutMapping("/updatebyid")
	public User updateId(@RequestBody User u) {
		return controller.UpdateById(u);
	}
	
	@PutMapping("/updatebyname")
	public User update(@RequestParam("username") String username,@RequestBody User u) {
		return controller.updatename(username,u);
	}
	@DeleteMapping("/deletebyname")
	public String delete(@RequestParam("username") String username) {
		return controller.deletename(username);
	}
	
	@DeleteMapping("/{id}")
	public String deleteId(@PathVariable int id) {
		return controller.deleteById(id);
	}
}
