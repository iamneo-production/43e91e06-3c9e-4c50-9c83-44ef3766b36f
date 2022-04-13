package com.example.demo.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="institution")

public class AcademyModel {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	
  private int instituteid;
	
  private String institutename;
 
  private String institutedescription;
 
  private String instituteaddress;
 
  private String mobile;
 
  private String email;
  @JsonIgnore
  @OneToMany(mappedBy = "institution")
  private Set<Course> courses;
public AcademyModel() {
	super();
	
}
public AcademyModel(int instituteid, String institutename, String institutedescription, String instituteaddress,
		String mobile, String email) {
	super();
	this.instituteid = instituteid;
	this.institutename = institutename;
	this.institutedescription = institutedescription;
	this.instituteaddress = instituteaddress;
	this.mobile = mobile;
	this.email = email;
}
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
public Set<Course> getCourses() {
	return courses;
}
public void setCourses(Set<Course> courses) {
	this.courses = courses;
}

  
}
