package com.example.sprint4.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;



@Entity
@Table(name="students")
public class AdmissionModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int studentid;

	private String studentname;
	
	private Date studentdob;
	
	
	private String adress;
	
	private String mobile;
	
	private int SSLC;
	
	private int HSC;
	
	private int diploma;
	
	private String eligibility;
	
	@ManyToMany
    @JoinTable(
            name = "courses_enrolled",
            joinColumns = @JoinColumn(name = "student_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id")
    )
	public
    Set<Course> enrolledCourses = new HashSet<>();

   /* @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "institute_id", referencedColumnName = "instituteid")
    private AcademyModel institution;*/
	   
	
	
	
	public AdmissionModel() {
		super();
		
	}
	public AdmissionModel(int studentid, String studentname, Date studentdob, String adress, String mobile, int sSLC,
			int hSC, int diploma, String eligibility) {
		super();
		this.studentid = studentid;
		this.studentname = studentname;
		this.studentdob = studentdob;
		this.adress = adress;
		this.mobile = mobile;
		SSLC = sSLC;
		HSC = hSC;
		this.diploma = diploma;
		this.eligibility = eligibility;
	}
	public int getStudentid() {
		return studentid;
	}
	public void setStudentid(int studentid) {
		this.studentid = studentid;
	}
	public String getStudentname() {
		return studentname;
	}
	public void setStudentname(String studentname) {
		this.studentname = studentname;
	}
	public Date getStudentdob() {
		return studentdob;
	}
	public void setStudentdob(Date studentdob) {
		this.studentdob = studentdob;
	}
	public String getAdress() {
		return adress;
	}
	public void setAdress(String adress) {
		this.adress = adress;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public int getSSLC() {
		return SSLC;
	}
	public void setSSLC(int sSLC) {
		SSLC = sSLC;
	}
	public int getHSC() {
		return HSC;
	}
	public void setHSC(int hSC) {
		HSC = hSC;
	}
	public int getDiploma() {
		return diploma;
	}
	public void setDiploma(int diploma) {
		this.diploma = diploma;
	}
	public String getEligibility() {
		return eligibility;
	}
	public void setEligibility(String eligibility) {
		this.eligibility = eligibility;
	}
	public Set<Course> getEnrolledCourses() {
		return enrolledCourses;
	}
	public void setEnrolledCourses(Set<Course> enrolledCourses) {
		this.enrolledCourses = enrolledCourses;
	}
	/*public AcademyModel getInstitution() {
		return institution;
	}
	public void setInstitution(AcademyModel institution) {
		this.institution = institution;
	}
	*/
	public void setInstitution(AcademyModel institution) {
		// TODO Auto-generated method stub
		
	}

}
