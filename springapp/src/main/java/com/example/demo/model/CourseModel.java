package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="course")
public class CourseModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int courseid;
	
	private String coursename;
	
	private String courseDescription;
	
	private int courseDuration;
	
	
	


	public int getCourseid() {
		return courseid;
	}

	public void setCourseid(int courseid) {
		this.courseid = courseid;
	}

	public String getCoursename() {
		return coursename;
	}

	public void setCoursename(String coursename) {
		this.coursename = coursename;
	}

	public String getCourseDescription() {
		return courseDescription;
	}

	public void setCourseDescription(String courseDescription) {
		this.courseDescription = courseDescription;
	}

	public int getCourseDuration() {
		return courseDuration;
	}

	public void setCourseDuration(int courseDuration) {
		this.courseDuration = courseDuration;
	}

	public CourseModel(int courseid, String coursename, String courseDescription, int courseDuration) {
		super();
		this.courseid = courseid;
		this.coursename = coursename;
		this.courseDescription = courseDescription;
		this.courseDuration = courseDuration;
	}

	public CourseModel() {
		
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "CourseModel [courseid=" + courseid + ", coursename=" + coursename + ", courseDescription="
				+ courseDescription + ", courseDuration=" + courseDuration + ", ]";
	}

	
	
	
	
	

}
