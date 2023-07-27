package com.ats.security.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ats.security.entity.Product;



public interface ProductRepo extends JpaRepository<Product, Long> {
    List<Product> findByType(String type);
}
