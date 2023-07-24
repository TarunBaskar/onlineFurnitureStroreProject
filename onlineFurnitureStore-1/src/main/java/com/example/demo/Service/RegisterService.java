package com.example.demo.Service;

import java.util.List;

import com.example.demo.Entity.Register;
import com.example.demo.dto.RegisterDto;

public interface RegisterService {

	String addUser(RegisterDto userdto);

	List<Register> getUser();

}
