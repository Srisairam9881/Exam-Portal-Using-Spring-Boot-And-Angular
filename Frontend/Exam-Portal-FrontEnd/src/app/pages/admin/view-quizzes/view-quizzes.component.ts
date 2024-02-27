import { Component, OnInit } from '@angular/core';
import { QuizServicesService } from 'src/app/Services/Quiz Services/quiz-services.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-view-quizzes',
templateUrl: './view-quizzes.component.html',
styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

quizzes=[{
qid:'',
title:'',
description:'',
maxMarks:'',
noOfQuestions:'',
category:{
cid:'',
title:''
}
}];

constructor(private quiz:QuizServicesService) { }

ngOnInit(): void {
this.quiz.quizzes().subscribe((data:any)=>{
this.quizzes=data;
},
err=>{
Swal.fire("Error in Loading Data")
});
}

//delete Quiz
deleteQuiz(qid: any)
{

Swal.fire({
icon:'info',
title:'Are You Sure?',
confirmButtonText:'Delete',
showCancelButton:true
}).then(result=>{
if(result.isConfirmed)
{
this.quiz.deleteQuiz(qid).subscribe(
(data)=>{
this.quizzes=this.quizzes.filter((quiz)=>quiz.qid!=qid);
Swal.fire('Success','Successfully Deleted','success');
},
err=>{
Swal.fire('error','Something went wrong','error')
});
}

});
}

}
