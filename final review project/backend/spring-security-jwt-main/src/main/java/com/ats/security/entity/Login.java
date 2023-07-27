package com.ats.security.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "login")
public class Login {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column(name="user_id", length = 45)
	private int id;
	 @Column(name="user_name", length = 60)
	private String userName;
	 @Column(name="user_email", length = 25)
	private String email;
	 @Column(name="user_password", length = 20) 
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
	public Login(int id, String userName, String email, String mPassword) {
		super();
		this.id = id;
		this.userName = userName;
		this.email = email;
		this.mPassword = mPassword;

	}
	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName +  ", email=" + email
				+ ", mPassword=" + mPassword + ", ]";
	}
	public Login() {
		
		
	}
	
	
	
	

}