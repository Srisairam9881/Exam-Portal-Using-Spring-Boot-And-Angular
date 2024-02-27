package com.example.ExamPortal.service;

import java.util.Set;


import com.example.ExamPortal.models.User;
import com.example.ExamPortal.models.UserRole;

public interface UserService {

	//Creating User
	public User createUser(User user,Set<UserRole>userRoles) throws Exception;
	//get user by username
	public User getUser(String username);
	//delete user by id
	public void deleteUser(Long userId);
	
}
