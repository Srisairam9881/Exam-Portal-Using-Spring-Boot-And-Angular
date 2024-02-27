package com.example.ExamPortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ExamPortal.examModels.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{

}
