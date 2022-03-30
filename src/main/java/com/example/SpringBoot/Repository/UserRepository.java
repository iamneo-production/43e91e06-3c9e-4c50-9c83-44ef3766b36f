package com.example.SpringBoot.Repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.SpringBoot.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

	User findByusername(String username);

	String deleteByusername(String username);

    Optional<User> findByEmailAndPassword(String email, String password);

	void deleteUserById(int id);

}
