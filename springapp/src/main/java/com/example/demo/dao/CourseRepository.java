package com.example.demo.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.demo.model.CourseModel;


@Repository
public interface CourseRepository extends JpaRepository<CourseModel, Integer> {
	List<CourseModel> findByInstituteid(int instituteid);
}
