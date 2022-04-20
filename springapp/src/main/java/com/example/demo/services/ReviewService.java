package com.example.demo.services;

import com.example.demo.model.ReviewModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.ReviewRepository;

import java.util.List;

@Service
public class ReviewService {
	
	@Autowired
	private ReviewRepository ReviewRepo;
	
	public ReviewModel AddReview(ReviewModel review){
		return ReviewRepo.save(review);
	}

	public List<ReviewModel> getReviews() {
		return ReviewRepo.findAll();
	}

	public ReviewModel getReviewById(int id){
		return ReviewRepo.findById(id).get();
	}

    public void DeleteReview(int id) {
		ReviewRepo.deleteById(id);
	}
    }

