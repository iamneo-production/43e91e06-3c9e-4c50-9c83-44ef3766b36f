package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="AUTH_USER_AUTHORITY")
public class Auth {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long user_id;
	private long authorities_id;
	public long getUser_id() {
		return user_id;
	}
	public void setUser_id(long user_id) {
		this.user_id = user_id;
	}
	public long getAuthorities_id() {
		return authorities_id;
	}
	public void setAuthorities_id(long authorities_id) {
		this.authorities_id = authorities_id;
	}
	public Auth(long user_id, long authorities_id) {
		super();
		this.user_id = user_id;
		this.authorities_id = authorities_id;
	}
	public Auth() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Auth [user_id=" + user_id + ", authorities_id=" + authorities_id + "]";
	}
	
	
		
	
	
	
	
}
