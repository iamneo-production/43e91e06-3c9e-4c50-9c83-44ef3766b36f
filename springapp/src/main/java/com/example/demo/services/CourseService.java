package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.CourseRepository;
import com.example.demo.model.CourseModel;

@Service
public class CourseService {
	
	@Autowired
	public CourseRepository courserepository;
	
	
	public List<CourseModel>getCourses(){
		return courserepository.findAll();
	}
	
	public CourseModel getCourseById(int courseid) {
		Optional<CourseModel>course = courserepository.findById(courseid);
		return (course.get());
	}
	
	public List<CourseModel> getInstituteById(int instituteid) {
		List<CourseModel>institute = courserepository.findByInstituteid(instituteid);
		return (institute);
	}
	
	public CourseModel saveCourse(CourseModel course) {
		return courserepository.save(course);
	}
	
	public void deleteById(int courseid) {
		courserepository.deleteById(courseid);
	}
	
	public CourseModel updateCourse(int courseid,CourseModel course) {
		if(getCourseById(course.getCourseid())==null) {
			return null;
		}
		CourseModel courses = courserepository.save(course);
		return courses;
	}

}
