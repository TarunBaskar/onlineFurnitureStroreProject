package com.example.demo.Service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Product;
import com.example.demo.Repository.ProductRepo;


import java.util.List;

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