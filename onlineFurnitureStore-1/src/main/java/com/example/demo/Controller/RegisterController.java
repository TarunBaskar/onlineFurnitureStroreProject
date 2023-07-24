package com.example.demo.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Register;
import com.example.demo.Service.RegisterService;
import com.example.demo.dto.RegisterDto;


@RestController
@CrossOrigin
@RequestMapping("/register")
public class RegisterController {
	 @Autowired
	    RegisterService userService;
	 
	      @PostMapping(path = "/save")
	    public String savePatients(@RequestBody RegisterDto userdto)
	    {
	    	String id = userService.addUser(userdto);
	        return id;
	        
	    }
	        @GetMapping("/get")
	    	public List<Register> get()
	    	{
	    		return userService.getUser();
	    		
	    	}
    }