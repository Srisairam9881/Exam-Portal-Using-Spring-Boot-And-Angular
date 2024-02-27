package com.example.ExamPortal.service;

import java.util.Set;

import com.example.ExamPortal.examModels.Question;
import com.example.ExamPortal.examModels.Quiz;

public interface QuestionService {
	   Question addQuestion(Question question);
	   Question updateQuestion(Question question);
	   Set<Question> getQuestion();
	   Question getQuestion(Long qid);
	   Set<Question> getQuestionsOfQuiz(Quiz quiz);
	   void  deleteQuestion(Long qid);
}
