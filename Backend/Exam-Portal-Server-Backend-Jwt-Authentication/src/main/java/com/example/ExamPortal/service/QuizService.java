package com.example.ExamPortal.service;

import java.util.List;
import java.util.Set;


import com.example.ExamPortal.examModels.Category;
import com.example.ExamPortal.examModels.Quiz;

public interface QuizService {
	   Quiz addQuiz(Quiz quiz);
	   Quiz updateQuiz(Quiz quiz);
	   Set<Quiz> getQuiz();
	   Quiz getQuiz(Long qid);
	   void  deleteQuiz(Long qid);
	   List<Quiz> getQuizzesOfCategory(Category category);
	   List<Quiz> getActiveQuizzes();
	   List<Quiz> getActiveQuizzesOfCategory(Category c);

}
