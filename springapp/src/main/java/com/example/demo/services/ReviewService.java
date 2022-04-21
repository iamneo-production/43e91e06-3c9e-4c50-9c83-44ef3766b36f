package com.example.demo.services;

import com.example.demo.model.ReviewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.ReviewRepository;

import java.util.Collections;
import java.util.List;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository ReviewRepo;

	public ReviewModel AddReview(ReviewModel review) {
		return ReviewRepo.save(review);
	}

	public List<ReviewModel> getReviews() {
		return ReviewRepo.findAll();
	}

	public ReviewModel getReviewById(int id) {
		return ReviewRepo.findById(id).get();
	}

	public void DeleteReview(int id) {
		ReviewRepo.deleteById(id);
	}

	public ReviewModel UpdateReview(ReviewModel review) {
		return ReviewRepo.save(review);
	}

	public List<String> getStudentReview(int id) {
		List<String> s = Collections.singletonList(String.valueOf(ReviewRepo.findByStudentReviewModelId(id)));

		return s;
	}

	public void EditRating(int id, int rating) {
		ReviewModel review = ReviewRepo.findById(id).get();
		if (review != null) {
			review.setReview(rating);
		}
	}

	public List<String> getCourseReview(int id) {
		List<String> s = Collections.singletonList(String.valueOf(ReviewRepo.findByCourseReviewModelId(id)));

		return s;
	}
}
