package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CourseModel;
import com.example.demo.services.CourseService;

@RestController
@CrossOrigin
@RequestMapping("/course")
public class CourseController {
	
	@Autowired
	public CourseService courseservice;
	
	@GetMapping("/viewcourses")
	public List<CourseModel>findAllCourses(){
		return courseservice.getCourses();
	}
	
	@GetMapping("/{courseid}")
	public CourseModel getCourseById(@PathVariable int courseid) {
		return courseservice.getCourseById(courseid);
	}
	
	@GetMapping("/institute/{instituteid}")
	public ResponseEntity<List<CourseModel>> getInstitutessById(@PathVariable int instituteid) {
		return ResponseEntity.ok(courseservice.getInstituteById(instituteid));
	}

	
	
	@PostMapping("/addCourse")
	public CourseModel addCourse(@RequestBody CourseModel course) {
		return courseservice.saveCourse(course);
	}
	
	@DeleteMapping("/{courseid}")
	public void deleteById(@PathVariable int courseid) {
		courseservice.deleteById(courseid);
	}
	
	@PutMapping("/updatecourse/{courseid}")
	public ResponseEntity<CourseModel>editCourse(@RequestBody CourseModel course,@PathVariable int courseid){
		CourseModel courses = courseservice.getCourseById(courseid);
		courses.setCoursename(course.getCoursename());
		courses.setCourseDuration(course.getCourseDuration());
		courses.setCourseDescription(course.getCourseDescription());
		courses.setInstituteid(course.getInstituteid());
		CourseModel updatedCourse = courseservice.saveCourse(courses);
		return ResponseEntity.ok(updatedCourse);
	}
	
	
	

}
