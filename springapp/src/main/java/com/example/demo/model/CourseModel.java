package com.example.demo.model;

import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "course")
public class CourseModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int courseid;

	private String coursename;

	private String courseDescription;

	private int courseDuration;

	private int instituteid;

	@JsonIgnore
	@OneToMany(mappedBy = "courseModel", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<ReviewModel> reviewModels = new LinkedHashSet<>();

	public Set<ReviewModel> getReviewModels() {
		return reviewModels;
	}

	public void setReviewModels(Set<ReviewModel> reviewModels) {
		this.reviewModels = reviewModels;
	}

	public CourseModel(int instituteid) {
		super();
		this.instituteid = instituteid;
	}

	public int getInstituteid() {
		return instituteid;
	}

	public void setInstituteid(int instituteid) {
		this.instituteid = instituteid;
	}

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
				+ courseDescription + ", courseDuration=" + courseDuration + ",instituteid=" + instituteid + "]";
	}

}
