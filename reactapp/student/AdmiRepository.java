package com.example.sprint4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import com.example.sprint4.model.AdmissionModel;


public interface AdmiRepository extends JpaRepository<AdmissionModel, Integer>{

}
