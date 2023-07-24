package com.example.demo.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Entity.Register;

public interface RegisterRepo extends JpaRepository<Register,Integer> {

	Optional<Register> findByEmail(String email);


}
