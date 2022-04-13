package com.example.demo.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity


public class Course {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int courseid;
	
	private String coursename;
	
	private String coursedescription;
	
	private int courseduration;
	
	
	/*@ManyToOne(fetch = FetchType.LAZY)
	  @JoinColumn(name = "student_id")
	 
	  
	
	/-@ManyToMany
    @JoinTable(
            name = "students_enrolled",
            joinColumns = @JoinColumn(name = "course_id"),
            inverseJoinColumns = @JoinColumn(name = "student_id")
    )
    Set<AdmissionModel> enrolledStudents = new HashSet<>();*/
	
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "institute_id", referencedColumnName = "instituteid")
    private AcademyModel institution;
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Course(int courseid, String coursename, String coursedescription, int courseduration) {
		super();
		this.courseid = courseid;
		this.coursename = coursename;
		this.coursedescription = coursedescription;
		this.courseduration = courseduration;
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
	public String getCoursedescription() {
		return coursedescription;
	}
	public void setCoursedescription(String coursedescription) {
		this.coursedescription = coursedescription;
	}
	public int getCourseduration() {
		return courseduration;
	}
	public void setCourseduration(int courseduration) {
		this.courseduration = courseduration;
	}
	/*public Set<AdmissionModel> getEnrolledStudents() {
		return enrolledStudents;
	}
	public void setEnrolledStudents(Set<AdmissionModel> enrolledStudents) {
		this.enrolledStudents = enrolledStudents;
	}*/
	public AcademyModel getInstitution() {
		return institution;
	}
	public void setInstitution(AcademyModel institution) {
		this.institution = institution;
	}
	
	
	

	
}
