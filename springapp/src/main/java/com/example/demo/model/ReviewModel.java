package com.example.demo.model;

import org.hibernate.Hibernate;
import javax.persistence.*;
import java.util.Objects;

@Table(name = "review")
@Entity
public class ReviewModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	private int review;

	private String Comment;

	// @JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "student_user_id")
	private AdmissionModel student;

	// @JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "course_model_id")
	private CourseModel courseModel;

	public CourseModel getCourseModel() {
		return courseModel;
	}

	public void setCourseModel(CourseModel courseModel) {
		this.courseModel = courseModel;
	}

	public AdmissionModel getStudent() {
		return student;
	}

	public void setStudent(AdmissionModel student) {
		this.student = student;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getReview() {
		return review;
	}

	public void setReview(int review) {
		this.review = review;
	}

	public String getComment() {
		return Comment;
	}

	public void setComment(String comment) {
		Comment = comment;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o))
			return false;
		ReviewModel that = (ReviewModel) o;
		return id != 0 && Objects.equals(id, that.id);
	}

	@Override
	public int hashCode() {
		return getClass().hashCode();
	}
}
