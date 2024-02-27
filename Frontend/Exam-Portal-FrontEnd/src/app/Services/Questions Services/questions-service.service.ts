import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../Auth and helper/helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsServiceService {

  constructor(private http:HttpClient) { }
  //getQuestion of quiz this can use admin
  public getQuestionOfQuiz(qid: any)
  {
  return this.http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }
  //get question for test, this is for user
  public getQuestionOfQuizForTest(qid: any)
  {
  return this.http.get(`${baseUrl}/question/quiz/${qid}`);
  }
  //add Question
  public addQuestion(question: any)
  {
  return this.http.post(`${baseUrl}/question/`,question);
  }
  //delete Question
  public deleteQuestion(qid:any)
  {
  return this.http.delete(`${baseUrl}/question/${qid}`);
  }

}
