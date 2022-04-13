package com.example.demo.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.AdmissionModel;




public interface AdmissionRepository extends JpaRepository<AdmissionModel, Integer>{
	Optional<AdmissionModel> findByStudentid(int studentid);
	
	List<AdmissionModel> findByid(long id);
	
	List<AdmissionModel> findByCourseid(int courseid);
}
