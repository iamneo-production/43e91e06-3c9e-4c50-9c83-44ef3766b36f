package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Auth;

@Repository
public interface AuthRepository extends JpaRepository<Auth,Long>{

}
