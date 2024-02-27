package com.example.ExamPortal.helper;

@SuppressWarnings("serial")
public class UserNotFoundException extends Exception {
	
	public UserNotFoundException()
	{
	super("user with this username is not Found");
	}
	public UserNotFoundException(String msg) 
	{
	super(msg);
	}

}
