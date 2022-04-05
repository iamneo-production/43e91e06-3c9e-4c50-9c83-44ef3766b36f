package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Course;
import com.example.demo.dao.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepository crepo;
	
	@Override
	public Course saveCourse(Course course) {
		// TODO Auto-generated method stub
		return crepo.save(course);
	}

	@Override
	public List<Course> getAllCourses() {
		// TODO Auto-generated method stub
		return crepo.findAll();
	}

	@Override
	public void deleteCourse(int id) {
		// TODO Auto-generated method stub
		crepo.deleteById(id);
		
	}

	@Override
	public void updateCourse(int id, Course course) {
		// TODO Auto-generated method stub
		Course crse = crepo.findById(id).get();
		
		crse.setCourseName(course.getCourseName());
		crse.setCourseDescription(course.getCourseDescription());
		crse.setCourseDuration(course.getCourseDuration());
		
		crepo.save(crse);
		
	}

	@Override
	public Course findCourseById(int id) {
		// TODO Auto-generated method stub
		return crepo.findById(id).get();
	}

}
