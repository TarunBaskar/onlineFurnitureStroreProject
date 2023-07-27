package com.ats.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ats.security.entity.Login;



@Repository

public interface LoginRepo extends JpaRepository<Login,Integer> {

}