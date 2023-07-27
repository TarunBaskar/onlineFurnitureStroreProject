package com.ats.security.service;

import com.ats.security.entity.Register;

import com.ats.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<Register> getAllUsers() {
        return userRepository.findAll();
    }

    public Register getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public Register createUser(Register user) {
        return userRepository.save(user);
    }

    public Register updateUser(int id, Register user) {
        Register existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
            // Update the user properties as needed
            existingUser.setName(user.getName());
//            existingUser.setLastName(user.getLastName());
            // Set other properties as needed

            return userRepository.save(existingUser);
        }
        return null;
    }

    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }
    
}

