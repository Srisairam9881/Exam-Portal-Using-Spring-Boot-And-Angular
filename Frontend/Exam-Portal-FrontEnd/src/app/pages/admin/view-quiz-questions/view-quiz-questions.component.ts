import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsServiceService } from 'src/app/Services/Questions Services/questions-service.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-view-quiz-questions',
templateUrl: './view-quiz-questions.component.html',
styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

qId: any;
qTitle: any;

questions=[{
quesId:'',
content:'',
option1:'',
option2:'',
option3:'',
option4:'',
answer:'',
quiz:{
qid:'',
title:'',
}
}];

constructor(private route:ActivatedRoute,private question:QuestionsServiceService) { }

ngOnInit(): void {
this.qId=this.route.snapshot.params['qid'];
this.qTitle=this.route.snapshot.params['title'];

this.question.getQuestionOfQuiz(this.qId).subscribe(
(data:any)=>{
this.questions=data;
},
err=>{
Swal.fire("Service Unavailable");
});
}
//Delete Question
deleteQuestion(qId: any)
{
Swal.fire({
icon:'info',
showCancelButton:true,
confirmButtonText:'Delete',
title:'Are You Sure,Do you want to delete this question'
}).then(result=>{
if(result.isConfirmed)
{
this.question.deleteQuestion(qId).subscribe(
(data)=>{
Swal.fire("Successfully","Question has been deleted",'success');
this.questions=this.questions.filter((q)=>q.quesId!=qId);
},
err=>{
Swal.fire('Error','Something went wrong','error');
});
}
});
}

}
