package com.example.demo.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Table(name= "review" )
@Entity
public class ReviewModel {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;

	private int review;

	@ManyToMany(mappedBy = "reviewModels", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
	private Set<CourseModel> courseModels = new LinkedHashSet<>();


	@JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_user_id")
	private User user;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Set<CourseModel> getCourseModels() {
		return courseModels;
	}

	public void setCourseModels(Set<CourseModel> courseModels) {
		this.courseModels = courseModels;
	}


	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getReview() {
		return review;
	}
	public void setReview(int review) {
		this.review = review;
	}
}
	