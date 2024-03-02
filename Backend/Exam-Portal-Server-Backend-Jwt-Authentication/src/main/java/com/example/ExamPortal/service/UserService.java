package com.example.ExamPortal.service;

import java.util.Set;

import org.springframework.web.multipart.MultipartFile;

import com.example.ExamPortal.models.User;
import com.example.ExamPortal.models.UserRole;

public interface UserService {

	//Creating User
	public User createUser(User user,Set<UserRole>userRoles) throws Exception;
	//get user by username
	public User getUser(String username);
	//delete user by id
	public void deleteUser(Long userId);
	// Get all user details
    public Set<User> getAllUsers();
	Set<User> getAllAdmins();
}
