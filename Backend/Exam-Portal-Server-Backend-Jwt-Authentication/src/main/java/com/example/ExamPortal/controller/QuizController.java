package com.example.ExamPortal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ExamPortal.examModels.Category;
import com.example.ExamPortal.examModels.Quiz;
import com.example.ExamPortal.service.QuizService;
@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuizController {
	@Autowired
	private QuizService quizService;
	
	//add quiz
	@PostMapping("/")
	public  ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz)
	{
	 Quiz quiz1=this.quizService.addQuiz(quiz);
	 return ResponseEntity.ok(quiz1);
	}
	
	//get quiz
	@GetMapping("/{qId}")
	public Quiz getQuiz(@PathVariable("qId") Long quizId)
	{
	 return this.quizService.getQuiz(quizId);
	}
	
	//get All quizzes
	@GetMapping("/")
	public ResponseEntity<?> getQuiz()
	{
	return ResponseEntity.ok(this.quizService.getQuiz());
	}
	
	//update quiz
	@PutMapping("/")
	public ResponseEntity<Quiz> updateQuiz(@RequestBody Quiz quiz)
	{
	return ResponseEntity.ok(this.quizService.updateQuiz(quiz));
	}
	
	//delete quiz
	@DeleteMapping("/{qId}")
	public void deleteQuiz(@PathVariable("qId") Long qId)
	{
	this.quizService.deleteQuiz(qId);
	}
	
	@GetMapping("/category/{cId}")
	public List<Quiz> getQuizzesOfCategory(@PathVariable("cId") Long cId)
	{
	Category category=new Category();
	category.setCid(cId);
	return  this.quizService.getQuizzesOfCategory(category);
	}
	
	//get Active quizzes
	@GetMapping("/active")
	public List<Quiz> getActiveQuizzes()
	{
	return this.quizService.getActiveQuizzes();
	}
	//get Active Quizzes of category
	@GetMapping("/category/active/{cid}")
	public List<Quiz> getActiveQuizzes(@PathVariable("cid") Long cid)
	{
	Category category=new Category();
	category.setCid(cid);
	return this.quizService.getActiveQuizzesOfCategory(category);
	}

}
