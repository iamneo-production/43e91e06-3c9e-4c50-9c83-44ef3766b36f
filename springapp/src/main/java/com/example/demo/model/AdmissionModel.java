package com.example.demo.model;

import java.util.Date;
import java.util.LinkedHashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "student")
public class AdmissionModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int studentid;

	private String studentName;

	private Date studentDoB;

	private String address;

	private String mobile;

	private int sslc;

	private int hsc;

	private int diploma;

	private String eligibility;

	private int instituteid;

	private String institutename;

	private int courseid;

	private String coursename;

	private long id;

	@JsonIgnore
	@OneToMany(mappedBy = "student", cascade = CascadeType.ALL, orphanRemoval = true)
	private Set<ReviewModel> reviewModels = new LinkedHashSet<>();

	public Set<ReviewModel> getReviewModels() {
		return reviewModels;
	}

	public void setReviewModels(Set<ReviewModel> reviewModels) {
		this.reviewModels = reviewModels;
	}

	public int getStudentid() {
		return studentid;
	}

	public void setStudentid(int studentid) {
		this.studentid = studentid;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public Date getStudentDoB() {
		return studentDoB;
	}

	public void setStudentDoB(Date studentDoB) {
		this.studentDoB = studentDoB;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public int getSslc() {
		return sslc;
	}

	public void setSslc(int sslc) {
		this.sslc = sslc;
	}

	public int getHsc() {
		return hsc;
	}

	public void setHsc(int hsc) {
		this.hsc = hsc;
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

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public AdmissionModel(int studentid, String studentName, Date studentDoB, String address, String mobile, int sslc,
			int hsc, int diploma, String eligibility, int instituteid, String institutename, int courseid,
			String coursename, long id) {
		super();
		this.studentid = studentid;
		this.studentName = studentName;
		this.studentDoB = studentDoB;
		this.address = address;
		this.mobile = mobile;
		this.sslc = sslc;
		this.hsc = hsc;
		this.diploma = diploma;
		this.eligibility = eligibility;
		this.instituteid = instituteid;
		this.institutename = institutename;
		this.courseid = courseid;
		this.coursename = coursename;
		this.id = id;
	}

	public AdmissionModel() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "AdmissionModel [studentid=" + studentid + ", studentName=" + studentName + ", studentDoB=" + studentDoB
				+ ", address=" + address + ", mobile=" + mobile + ", sslc=" + sslc + ", hsc=" + hsc + ", diploma="
				+ diploma + ", eligibility=" + eligibility + ", instituteid=" + instituteid + ", institutename="
				+ institutename + ", courseid=" + courseid + ", coursename=" + coursename + ", id=" + id + "]";
	}

}
