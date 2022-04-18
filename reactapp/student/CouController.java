package com.example.sprint4.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sprint4.model.Course;
import com.example.sprint4.service.CourseServices;



@RestController
@RequestMapping("/api")
public class CourControllers {
	@Autowired
	CourseServices courseService;
	@GetMapping("/courses")
	private List<Course>getAllCourses()
	{
		return courseService.getAllCourses();
	}
	@GetMapping("/course/{courseid}")
	private Course getCourses(@PathVariable("courseid") int courseid)
	{
		return courseService.getCourseById(courseid);
	}
	@DeleteMapping("/deleteCourse/{courseid}")
	private void deleteCourse(@PathVariable("courseid")int courseid)
	{
		courseService.delete(courseid);
	}
	@PostMapping("/addCourse")
	private int saveCourse(@RequestBody Course courses)
	{
		courseService.saveOrUpdate(courses);
		return courses.getCourseid();
	}
	@PutMapping("/editCourse")
	private Course update(@RequestBody Course courses)
	{
		courseService.saveOrUpdate(courses);
		return courses;
	}

}
