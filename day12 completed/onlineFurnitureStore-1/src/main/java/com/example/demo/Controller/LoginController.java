package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Login;
import com.example.demo.Service.LoginService;
import com.example.demo.dto.LoginDto;


@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {
	 @Autowired
	    LoginService userService;
	 
	      @PostMapping(path = "/save")
	    public String savePatients(@RequestBody LoginDto userdto)
	    {
	    	String id = userService.addUser1(userdto);
	        return id;
	        
	    }
	        @GetMapping("/get")
	    	public List<Login> get()
	    	{
	    		return userService.getUser1();
	    		
	    	}
    }