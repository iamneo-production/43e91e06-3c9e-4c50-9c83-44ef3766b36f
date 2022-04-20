package com.example.demo.controllers;

import com.example.demo.model.ReviewModel;
import com.example.demo.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/review")
public class ReviewController {
	
	@Autowired
    private ReviewService reviewService;

    @GetMapping
    public List<ReviewModel> getReview(){
        return reviewService.getReviews();
    }
    @PostMapping
    public ReviewModel addReview(@RequestBody ReviewModel reviewModel){
        return reviewService.AddReview(reviewModel);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReviewModel> EditReview(@PathVariable int id, @RequestBody ReviewModel reviewModel){
        ReviewModel rv = reviewService.getReviewById(id);
        reviewService.AddReview(reviewModel);
        return ResponseEntity.ok(rv);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ReviewModel> DeleteReview(@PathVariable int id){
        ReviewModel rv = reviewService.getReviewById(id);
        reviewService.DeleteReview(id);
        return ResponseEntity.ok(rv);
    }
}



