import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsServiceService } from 'src/app/Services/Questions Services/questions-service.service';
import { QuizServicesService } from 'src/app/Services/Quiz Services/quiz-services.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-start-quiz',
templateUrl: './start-quiz.component.html',
styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
qid:any;
questions:any;
marksGot=0;
correctAnswers=0;
attempted=0;
isSubmit=false;
timer:any;

constructor(private locationSt:LocationStrategy,private route:ActivatedRoute,private question:QuestionsServiceService) { }

ngOnInit(): void {
this.preventBackButton();
this.qid=this.route.snapshot.params['qid'];
this.loadQuestions();
}

loadQuestions()
{
this.question.getQuestionOfQuizForTest(this.qid).subscribe(
(data:any)=>{
this.questions=data;
this.questions.forEach((q:any)=>{
this.timer=this.questions.length*2*60;
q['givenAnswer']='';

});
this.startTimer();
},
err=>{
Swal.fire("Error","Something Went Wrong","error");
});
}

preventBackButton()
{
history.pushState(null,"null",location.href);
this.locationSt.onPopState(()=>{
history.pushState(null,"null",location.href);
});
}

submitQuiz()
{
Swal.fire({
title: 'Do you want to Submit the Quiz?',
showCancelButton: true,
confirmButtonText: 'Submit',
icon:'info'
}).then(e=>{
if(e.isConfirmed)
{
this.evalQuiz();
}
});
}

startTimer()
{
let t=window.setInterval(()=>{
if(this.timer<=0)
{
this.submitQuiz();
clearInterval(t);
}else{
this.timer--;
}
},1000)
}

getFormattedTime()
{
let mm=Math.floor(this.timer/60);
let ss=this.timer - mm*60;
return `${mm} Min:${ss} Sec`;
}

evalQuiz()
{
this.isSubmit=true;
this.questions.forEach((q: { givenAnswer: any; answer: any; })=>{
if(q.givenAnswer==q.answer)
{
this.correctAnswers++;
let marksSingle=this.questions[0].quiz.maxMarks/this.questions.length;
this.marksGot+=marksSingle;
}
if(q.givenAnswer.trim()!='')
{
this.attempted++;
}
});
}
printPDF()
{
window.print();
}
}