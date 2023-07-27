package com.ats.security.controller;



import com.ats.security.entity.Register;
import com.ats.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<Register> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Register getUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public Register createUser(@RequestBody Register user) {
        return userService.createUser(user);
    }

    @PutMapping("/{id}")
    public Register updateUser(@PathVariable int id, @RequestBody Register user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }
}
