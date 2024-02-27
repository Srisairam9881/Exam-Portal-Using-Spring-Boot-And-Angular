import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizServicesService } from 'src/app/Services/Quiz Services/quiz-services.service';
import Swal from 'sweetalert2';


@Component({
selector: 'app-prequiz',
templateUrl: './prequiz.component.html',
styleUrls: ['./prequiz.component.css']
})
export class PrequizComponent implements OnInit {

qid:any;
quizzes:any;
constructor(private route:ActivatedRoute,private quiz:QuizServicesService,private router:Router) { }

ngOnInit(): void {
this.qid=this.route.snapshot.params['qid'];
this.quiz.getQuiz(this.qid).subscribe((data:any)=>{
this.quizzes=data;
},err=>{
alert("Something went wrong");
})
}

startQuiz()
{
Swal.fire({
title: 'Do you want to Start the Quiz?',
showCancelButton: true,
confirmButtonText: 'Start',
icon:'info'
}).then((result) => {
/* Read more about isConfirmed, isDenied below */
if (result.isConfirmed) {
this.router.navigate(['/start-quiz/'+this.qid]);
} 
})
}

}
