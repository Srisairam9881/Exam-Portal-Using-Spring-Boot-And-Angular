package com.example.ExamPortal.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ExamPortal.examModels.Question;
import com.example.ExamPortal.examModels.Quiz;
import com.example.ExamPortal.repository.QuestionRepository;
@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private QuestionRepository questionRepository;
	
	@Override
	public Question addQuestion(Question question) {
		// TODO Auto-generated method stub
		return questionRepository.save(question);
	}

	@Override
	public Question updateQuestion(Question question) {
		// TODO Auto-generated method stub
		return questionRepository.save(question);
	}

	@Override
	public Set<Question> getQuestion() {
		// TODO Auto-generated method stub
		return new HashSet<Question>( questionRepository.findAll() );
	}

	@Override
	public Question getQuestion(Long qid) {
		// TODO Auto-generated method stub
		return questionRepository.findById(qid).get();
	}

	@Override
	public void deleteQuestion(Long qid) {
		// TODO Auto-generated method stub
		Question question=new Question();
		question.setQuesId(qid);
		questionRepository.delete(question);
	}

	@Override
	public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return this.questionRepository.findByQuiz(quiz);
	}


}
