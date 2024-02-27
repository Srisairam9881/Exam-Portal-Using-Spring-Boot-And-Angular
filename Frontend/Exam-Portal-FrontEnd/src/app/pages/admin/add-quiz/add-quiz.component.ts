import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/Services/Category Services/category-service.service';
import { QuizServicesService } from 'src/app/Services/Quiz Services/quiz-services.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-add-quiz',
templateUrl: './add-quiz.component.html',
styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
categories=[];
quizData={
title:'',
description:'',
maxMarks:'',
noOfQuestions:'',
active:true,
category:{
  cid:''
}
};
constructor(private cat:CategoryServiceService,private quiz:QuizServicesService) { }

ngOnInit(): void {
this.cat.categories().subscribe(
(data:any)=>{
 this.categories=data;
},
err=>{
Swal.fire("Error in Loading data from server")
});
}

//addQuiz
addQuiz()
{
if(this.quizData.title.trim()==''||this.quizData.description.trim()==''||this.quizData.maxMarks==''||this.quizData.noOfQuestions==''||this.quizData.category.cid==''||this.quizData==null)
{
Swal.fire({
icon: 'error',
title: 'Oops...',
text: 'All fields are Required!',
})
return;
}
//adding quiz into database
this.quiz.addQuiz(this.quizData).subscribe(data=>{
this.quizData.title='';
this.quizData.description='';
this.quizData.maxMarks='';
this.quizData.noOfQuestions='';
this.quizData.active=false;
this.quizData.category={cid:''};
Swal.fire('success','Quiz has been added succesfully','success');
},
err=>{
Swal.fire('Error','Something went wrong!!');
})
}

}
