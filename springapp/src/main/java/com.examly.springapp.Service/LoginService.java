package com.examly.springapp.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.Repository.UserRepository;
import com.examly.springapp.model.User;

@Service
public class LoginService {

    @Autowired
    private UserRepository repo;

    public User getUserByEmailAndPassword(String email, String password) {
        Optional<User> u = repo.findByEmailAndPassword(email, password);
        return u.get();
    }

}