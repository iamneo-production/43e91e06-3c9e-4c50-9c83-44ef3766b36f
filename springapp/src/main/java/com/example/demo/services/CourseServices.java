package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CoursesRepository;
import com.example.demo.model.Course;




@Service
public class CourseServices {
	@Autowired
	CoursesRepository courseRepository;
	public List<Course>getAllCourses()
	{
		List<Course>courses=new ArrayList<Course>();
		courseRepository.findAll().forEach(courses1->courses.add(courses1));
		return courses;
	}
	public Course getCourseById(int courseid) {
		// TODO Auto-generated method stub
		return courseRepository.findById(courseid).get();
	}
	public void saveOrUpdate(Course courses) {
		
		courseRepository.save(courses);
		
	}
	public void delete(int courseid) {
		// TODO Auto-generated method stub
		courseRepository.deleteById(courseid);
		
	}
	public void update(Course courses,int courseid)
	{
		courseRepository.save(courses);
	}

}
