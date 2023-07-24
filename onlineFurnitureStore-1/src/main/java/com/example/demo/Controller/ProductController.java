package com.example.demo.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Product;
import com.example.demo.Service.ProductService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/products")
public class ProductController {

 private final ProductService productService;

 @Autowired
 public ProductController(ProductService productService) {
     this.productService = productService;
 }

 @GetMapping("/getproducts")
 public ResponseEntity<List<Product>> getAllProducts() {
     List<Product> products = productService.getAllProducts();
     return new ResponseEntity<>(products, HttpStatus.OK);
 }

 @PostMapping("/addproducts")
 public ResponseEntity<Product> saveProduct(@RequestBody Product product) {
     Product savedProduct = productService.saveProduct(product);
     return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
 }
 @GetMapping("/getproducts/{type}")
    public ResponseEntity<List<Product>> getProductsByType(@PathVariable String type) {
        List<Product> products = productService.getProductsByType(type);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }


@PutMapping("/updateproduct/{id}")
public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
    Product existingProduct = productService.getProductById(id);
    if (existingProduct == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    existingProduct.setName(product.getName());
    existingProduct.setPrice(product.getPrice());
    existingProduct.setImage(product.getImage());
    existingProduct.setRating(product.getRating());
    existingProduct.setType(product.getType());
    Product updatedProduct = productService.saveProduct(existingProduct);
    return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
}

@DeleteMapping("/deleteproduct/{id}")
public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
    Product existingProduct = productService.getProductById(id);
    if (existingProduct == null) {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    productService.deleteProduct(id);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
}
}
