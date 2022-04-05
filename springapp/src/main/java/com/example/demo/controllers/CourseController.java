package com.example.demo.controllers;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Course;
import com.example.demo.services.CourseService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class CourseController {
	
	@Autowired
	public CourseService cservice;
	
	@PostMapping("/addCourse")
	public String add(@RequestBody Course course) {
		cservice.saveCourse(course);
		return "New Course is added";
	}
	
	@GetMapping("/viewCourse")
	public List<Course> getAllCourses(){
		return cservice.getAllCourses();
	}
	
	@GetMapping("/viewCourseById/{id}")
	public Course getCourseById(@PathVariable int id){
		return cservice.findCourseById(id);
	}
	
	
	@DeleteMapping("/deleteCourse/{id}")
	@ResponseStatus(code=HttpStatus.OK ,reason="OK")
	public void delete(@PathVariable int id) {
		cservice.deleteCourse(id);
	
	}
	
	@PutMapping("/updateCourse/{id}")
	@ResponseStatus(code=HttpStatus.OK,reason="OK")
	public void update(@PathVariable int id,@RequestBody Course course) {
		cservice.updateCourse(id, course);
	}

}
