package com.example.ExamPortal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ExamPortal.examModels.Category;
import com.example.ExamPortal.examModels.Quiz;
@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
   List<Quiz> findBycategory(Category category);
   List<Quiz> findByActive(Boolean b);
   List<Quiz> findByCategoryAndActive(Category c,Boolean b);
}
