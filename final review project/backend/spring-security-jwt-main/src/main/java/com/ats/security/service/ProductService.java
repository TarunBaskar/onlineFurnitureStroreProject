package com.ats.security.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ats.security.entity.Product;
import com.ats.security.repository.ProductRepo;



@Service
public class ProductService {

 private final ProductRepo productRepository;

 @Autowired
 public ProductService(ProductRepo productRepository) {
     this.productRepository = productRepository;
 }

 public List<Product> getAllProducts() {
     return productRepository.findAll();
 }
 public List<Product> getProductsByType(String type) {
     return productRepository.findByType(type);
 }
 public Product saveProduct(Product product) {
     return productRepository.save(product);
 }
 public Product getProductById(Long id) {
     return productRepository.findById(id).orElse(null);
 }

 public void deleteProduct(Long id) {
     productRepository.deleteById(id);
 }
}