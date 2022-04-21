package com.example.demo.controllers;

import com.example.demo.model.AdmissionModel;
import com.example.demo.model.CourseModel;
import com.example.demo.model.ReviewModel;
import com.example.demo.services.AdmissionService;
import com.example.demo.services.CourseService;
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
    @Autowired
    private CourseService courseService;
    @Autowired
    private AdmissionService studentService;

    @GetMapping
    public List<ReviewModel> getReview() {
        return reviewService.getReviews();
    }

    @GetMapping("/{id}")
    public ReviewModel getReviewById(@PathVariable(value = "id") int id) {
        return reviewService.getReviewById(id);
    }

    @GetMapping("/Student/{id}")
    public List<String> getReviewByUserId(@PathVariable(value = "id") int id) {
        return reviewService.getStudentReview(id);
    }

    @GetMapping("/course/{id}")
    public List<String> getReviewCourseId(@PathVariable(value = "id") int id) {

        return reviewService.getCourseReview(id);
    }

    @PostMapping("/course/{Course_id}/student/{student_id}")
    public ResponseEntity<ReviewModel> addReview(@PathVariable int Course_id, @PathVariable int student_id,
            @RequestBody ReviewModel reviewModel) {

        CourseModel courseModel = courseService.getCourseById(Course_id);
        AdmissionModel student = studentService.getStudentById(student_id);

        if (courseModel == null || student == null) {
            return ResponseEntity.notFound().build();
        }

        reviewModel.setCourseModel(courseModel);
        reviewModel.setStudent(student);
        reviewService.AddReview(reviewModel);
        return ResponseEntity.ok(reviewModel);

    }

    @PutMapping("/{id}")
    public ResponseEntity<ReviewModel> EditReview(@PathVariable int id, @RequestBody ReviewModel reviewModel) {
        ReviewModel rv = reviewService.getReviewById(id);
        reviewService.AddReview(reviewModel);
        return ResponseEntity.ok(rv);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ReviewModel> DeleteReview(@PathVariable int id) {
        ReviewModel rv = reviewService.getReviewById(id);
        reviewService.DeleteReview(id);
        return ResponseEntity.ok(rv);
    }

    @PutMapping("/{id}/{review}")
    public ResponseEntity<ReviewModel> EditRating(@PathVariable int id, @PathVariable int review) {
        ReviewModel rv = reviewService.getReviewById(id);
        reviewService.EditRating(id, review);
        return ResponseEntity.ok(rv);
    }

}
