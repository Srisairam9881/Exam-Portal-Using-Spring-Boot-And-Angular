package com.example.ExamPortal.service;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ExamPortal.examModels.Category;
import com.example.ExamPortal.repository.CategoryRepository;
@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Override
	public Category addCategory(Category category) {
		// TODO Auto-generated method stub
		return categoryRepository.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		// TODO Auto-generated method stub
		return categoryRepository.save(category);
	}

	@Override
	public Set<Category> getCategories() {
		// TODO Auto-generated method stub
		return new LinkedHashSet<Category>( categoryRepository.findAll() );
	}

	@Override
	public Category getCategory(Long cid) {
		// TODO Auto-generated method stub
		return categoryRepository.findById(cid).get();
	}

	@Override
	public void deleteCategory(Long cid) {
		// TODO Auto-generated method stub
		Category category=new Category();
		category.setCid(cid);
		this.categoryRepository.delete(category);
	}

}
