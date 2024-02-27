package com.example.ExamPortal.service;

import java.util.Set;

import com.example.ExamPortal.examModels.Category;

public interface CategoryService {
    Category addCategory(Category category);
    Category updateCategory(Category category);
    Set<Category> getCategories();
    Category getCategory(Long cid);
    void  deleteCategory(Long cid);
}
