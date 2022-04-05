package com.example.demo.services;

import java.util.List;

import com.example.demo.model.Course;

public interface CourseService {
public Course saveCourse(Course course);
	
	public List<Course> getAllCourses();

	public void deleteCourse(int id);

	public void updateCourse(int id, Course course);
	
	public Course findCourseById(int id);


}
