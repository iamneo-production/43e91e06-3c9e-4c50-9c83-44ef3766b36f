package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Auth;

@Repository
public interface AuthRepository extends JpaRepository<Auth,Long>{

}
