package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.InstituteModel;

@Repository
public interface InstituteRepository extends JpaRepository<InstituteModel,Integer>{

}
