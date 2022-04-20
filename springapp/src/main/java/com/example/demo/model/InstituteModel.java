package com.example.demo.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="institute")
public class InstituteModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int instituteid;
	private String institutename;
	private String institutedescription;
	private String instituteaddress;
	private String mobile;
	private String email;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "instituteid", referencedColumnName = "instituteid")
	List<CourseModel>course = new ArrayList<>();


	public int getInstituteid() {
		return instituteid;
	}


	public void setInstituteid(int instituteid) {
		this.instituteid = instituteid;
	}


	public String getInstitutename() {
		return institutename;
	}


	public void setInstitutename(String institutename) {
		this.institutename = institutename;
	}


	public String getInstitutedescription() {
		return institutedescription;
	}


	public void setInstitutedescription(String institutedescription) {
		this.institutedescription = institutedescription;
	}


	public String getInstituteaddress() {
		return instituteaddress;
	}


	public void setInstituteaddress(String instituteaddress) {
		this.instituteaddress = instituteaddress;
	}


	public String getMobile() {
		return mobile;
	}


	public void setMobile(String mobile) {
		this.mobile = mobile;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public List<CourseModel> getCourse() {
		return course;
	}


	public void setCourse(List<CourseModel> course) {
		this.course = course;
	}


	public InstituteModel(String institutename, String institutedescription, String instituteaddress, String mobile,
			String email) {
		super();
		this.institutename = institutename;
		this.institutedescription = institutedescription;
		this.instituteaddress = instituteaddress;
		this.mobile = mobile;
		this.email = email;
	}
	
	
	
	public InstituteModel() {
		
	}
	
	
	

}
