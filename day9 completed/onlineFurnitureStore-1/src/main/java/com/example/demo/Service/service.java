package com.example.demo.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.entity;
import com.example.demo.Repository.repo;




@Service
public class service {
	
	@Autowired 
	repo r;
	public boolean addEmployee(entity employee)

	{
	return r.save(employee)!=null?true:false;
	}
	public List <entity> getAllEmployees()
	{
	return r.findAll();
	}
	public entity getEmployeeById(int id)
	{
	return r.findById(id).get();
	}
}