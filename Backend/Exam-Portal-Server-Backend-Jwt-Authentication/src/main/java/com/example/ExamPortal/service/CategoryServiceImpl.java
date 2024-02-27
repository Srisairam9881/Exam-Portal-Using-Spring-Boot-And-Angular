package com.example.ExamPortal.service;

import java.util.LinkedHashSet;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ExamPortal.examModels.Category;
import com.example.ExamPortal.repository.CategoryRepository;
@Service
public class CategoryServiceImpl implements CategoryService {
	@Autowired
	private CategoryRepository categoryRepository;
	  private Set<Category> categories = new TreeSet<>(Comparator.comparing(Category::getTitle));

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

	@Override
	public Set<Category> getCategoriesSortedByName() {
		 // Convert set to array for sorting
        Category[] categoryArray = categories.toArray(new Category[0]);
        
        // Perform quicksort
        quickSort(categoryArray, 0, categoryArray.length - 1);
        
        // Convert sorted array back to set
        return new TreeSet<>(Arrays.asList(categoryArray));
	}
	  private void quickSort(Category[] arr, int low, int high) {
	        if (low < high) {
	            int pi = partition(arr, low, high);
	            quickSort(arr, low, pi - 1);
	            quickSort(arr, pi + 1, high);
	        }
	    }

	   private int partition(Category[] arr, int low, int high) {
	        Category pivot = arr[high];
	        int i = low - 1;
	        for (int j = low; j < high; j++) {
	            if (arr[j].getTitle().compareTo(pivot.getTitle()) < 0) {
	                i++;
	                Category temp = arr[i];
	                arr[i] = arr[j];
	                arr[j] = temp;
	            }
	        }
	        Category temp = arr[i + 1];
	        arr[i + 1] = arr[high];
	        arr[high] = temp;
	        return i + 1;
	    }

}
