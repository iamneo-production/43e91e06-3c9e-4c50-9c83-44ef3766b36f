package com.example.demo.dao;

import com.example.demo.model.CourseModel;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.ReviewModel;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewModel, Integer> {
    @Query(value = "SELECT r.review, c.coursename, s.student_name FROM review r , course c , student s WHERE c.courseid = r.course_model_id AND s.studentid = r.student_user_id and s.studentid = :id", nativeQuery = true)
    List<String> findByStudentReviewModelId(@Param("id") int id);

    @Query(value = "SELECT c.coursename, s.student_name, r.review FROM review r , course c , student s WHERE c.courseid = r.course_model_id AND s.studentid = r.student_user_id and c.courseid = :id", nativeQuery = true)
    List<String> findByCourseReviewModelId(@Param("id") int id);

}
