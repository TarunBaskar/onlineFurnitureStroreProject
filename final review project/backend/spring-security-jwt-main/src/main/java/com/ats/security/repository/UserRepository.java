package com.ats.security.repository;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;

import com.ats.security.entity.Register;

public interface UserRepository extends JpaRepository<Register, Integer> {
    Optional<Register> findByEmail(String email);
}
