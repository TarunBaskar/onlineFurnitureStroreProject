package com.example.demo.Service;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Register;
import com.example.demo.Repository.RegisterRepo;
import com.example.demo.dto.RegisterDto;



@Service
public class RegisterServiceImpl implements RegisterService {

	@Autowired
    private RegisterRepo userRepo;
    @Override
	public String addUser(RegisterDto userdto) {
		Register user = new Register(
                userdto.getId(),
                userdto.getUserName(),
                userdto.getAddress(),
                userdto.getEmail(),
                userdto.getmPassword(),
                userdto.getcPassword()
                
        );
        userRepo.save(user);
        return user.getUserName();
	}

	@Override
	public List<Register> getUser() {
		return userRepo.findAll();
		
	}
	

}