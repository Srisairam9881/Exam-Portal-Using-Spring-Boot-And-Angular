package com.example.ExamPortal.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ExamPortal.examModels.Question;
import com.example.ExamPortal.examModels.Quiz;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

	Set<Question> findByQuiz(Quiz quiz);

}
