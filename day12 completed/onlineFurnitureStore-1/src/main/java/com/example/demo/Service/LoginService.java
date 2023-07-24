package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.Login;

import com.example.demo.dto.LoginDto;

public interface LoginService {

	String addUser1(LoginDto user1dto);

	List<Login> getUser1();

	

}
