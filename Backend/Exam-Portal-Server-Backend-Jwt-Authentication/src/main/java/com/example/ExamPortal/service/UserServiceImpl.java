package com.example.ExamPortal.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.example.ExamPortal.helper.UserFoundException;
import com.example.ExamPortal.models.User;
import com.example.ExamPortal.models.UserRole;
import com.example.ExamPortal.repository.RoleRepository;
import com.example.ExamPortal.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	//Creating User
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		// TODO Auto-generated method stub
		User local=this.userRepository.findByUsername(user.getUsername());
		if(local!=null)
		{
		System.out.println("Username already is taken");
		throw new UserFoundException();
		}
		else
		{
		 //user create
		 for(UserRole ur:userRoles)
		 {
			roleRepository.save(ur.getRole());
		 }
		 user.getUserRoles().addAll(userRoles);
		 local=this.userRepository.save(user);
		}
		return local;
	}

	//getting user by username
	@Override
	public User getUser(String username) {
		// TODO Auto-generated method stub
		return this.userRepository.findByUsername(username);
	}
	
    //Delete user by id
	@Override
	public void deleteUser(Long userId) {
		// TODO Auto-generated method stub
		this.userRepository.deleteById(userId);
	}

	  @Override
	    public Set<User> getAllUsers() {
	        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	        if (authentication != null && authentication.getAuthorities().stream()
	                .anyMatch(r -> r.getAuthority().equals("ROLE_ADMIN"))) {
	            return new HashSet<>(userRepository.findAll());
	        } else {
	            throw new AccessDeniedException("Access is denied");
	        }
	    }

	

}
