package com.example.demo.dto;



import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class LoginDto {
	@Id
	private int id;
	private String userName;
	private String email;
	private String mPassword;

	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getmPassword() {
		return mPassword;
	}

	public void setmPassword(String mPassword) {
		this.mPassword = mPassword;
	}

	public LoginDto(int id, String userName, String email, String mPassword) {
		super();
		this.id = id;
		this.userName = userName;
		this.email = email;
		this.mPassword = mPassword;
		
	}
	
	public LoginDto() {
		
	}
	
	

}