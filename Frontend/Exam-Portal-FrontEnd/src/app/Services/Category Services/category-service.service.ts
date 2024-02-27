import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../Auth and helper/helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  
  constructor(private http:HttpClient) { }
  //get all categories
  public categories()
  {
  return this.http.get(`${baseUrl}/category/`);
  }
  //add category
  public addcategory(category: any)
  {
  return this.http.post(`${baseUrl}/category/`,category);
  }
  //sorted category By Tittle
  public sortCategory(){
    return this.http.get(`${baseUrl}/sorted/`);
  }
}
