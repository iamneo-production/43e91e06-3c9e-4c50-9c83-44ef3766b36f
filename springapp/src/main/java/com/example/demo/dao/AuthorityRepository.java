package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Authority;

@Repository
public interface AuthorityRepository extends JpaRepository<Authority,Long>{

}
