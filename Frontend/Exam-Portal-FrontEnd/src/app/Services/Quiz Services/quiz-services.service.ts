import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../Auth and helper/helper';

@Injectable({
  providedIn: 'root'
})
export class QuizServicesService {

  constructor(private http:HttpClient) { }
  
  //get all quizzes
  public quizzes()
  {
  return this.http.get(`${baseUrl}/quiz/`);
  }
  //addQuiz()
  public addQuiz(quiz: any)
  {
  return this.http.post(`${baseUrl}/quiz/`,quiz)
  }
  //delteQuiz
  public deleteQuiz(qId: any)
  {
  return this.http.delete(`${baseUrl}/quiz/${qId}`);
  }
  //get the single quiz
  public getQuiz(qId: any)
  {
  return this.http.get(`${baseUrl}/quiz/${qId}`);
  }
  //update quiz
  public updateQuiz(quiz: any)
  {
  return this.http.put(`${baseUrl}/quiz/`,quiz)
  }
  //get quizzes of category
  public getQuizOfCategory(cid: any)
  {
  return  this.http.get(`${baseUrl}/quiz/category/${cid}`);
  }
  //get Active Quizzes
  public getActiveQuizzes()
  {
  return this.http.get(`${baseUrl}/quiz/active`);
  }
  //get Active Quizzes of category 
  public getActiveQuizzesOfCategory(cid:any)
  {
  return this.http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }

}
