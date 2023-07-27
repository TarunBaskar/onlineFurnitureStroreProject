package com.ats.security.service;

import java.util.List;

import com.ats.security.entity.Login;
import com.ats.security.entity.LoginDto;



public interface LoginService {

	String addUser1(LoginDto user1dto);

	List<Login> getUser1();

	

}