package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.ReviewModel;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewModel, Integer> {
	
}
