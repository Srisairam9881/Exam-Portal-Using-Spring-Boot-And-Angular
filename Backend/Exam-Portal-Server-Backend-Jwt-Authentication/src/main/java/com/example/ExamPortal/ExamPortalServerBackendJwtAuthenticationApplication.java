package com.example.ExamPortal;
//import java.util.HashSet;
//import java.util.Set;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import com.example.ExamPortal.models.Role;
//import com.example.ExamPortal.models.User;
//import com.example.ExamPortal.models.UserRole;
//import com.example.ExamPortal.service.UserService;

@SpringBootApplication
public class ExamPortalServerBackendJwtAuthenticationApplication implements CommandLineRunner {
//@Autowired
//private UserService userService;
	
	public static void main(String[] args) {

		SpringApplication.run(ExamPortalServerBackendJwtAuthenticationApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
//	
//		BCryptPasswordEncoder passwordEncoder=new BCryptPasswordEncoder();
//			
//		User user=new User();
//		user.setFirstName("Allam");
//		user.setLastName("Venkateswara Rao");
//		user.setEmail("venkateswararo@gmail.com");
//		user.setUsername("venkateswararao7");
//		user.setPassword(passwordEncoder.encode("1234567"));
//		user.setPhoneNo("9123456780");
//		user.setProfile("default.img");
//		
//		Role role1=new Role();
//		role1.setRoleId(44L);
//		role1.setRoleName("ADMIN");
//		
//		Set<UserRole> userRoleSet=new HashSet<>();
//		UserRole userRole=new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//		userRoleSet.add(userRole);
//		
//		User user1=this.userService.createUser(user,userRoleSet);
//		System.out.println(user1.getUsername());
		
		
	}

}