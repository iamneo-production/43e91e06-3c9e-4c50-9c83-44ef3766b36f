package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.User;



@Repository
public interface UserDetailsRepository extends JpaRepository<User,Long>{
	 User findByUsername(String username);
}
