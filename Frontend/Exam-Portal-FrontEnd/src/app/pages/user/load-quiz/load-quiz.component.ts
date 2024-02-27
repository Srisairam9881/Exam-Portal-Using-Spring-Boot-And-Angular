import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizServicesService } from 'src/app/Services/Quiz Services/quiz-services.service';

@Component({
selector: 'app-load-quiz',
templateUrl: './load-quiz.component.html',
styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
catId: any;
quizzes:any;
constructor(private route:ActivatedRoute,private quiz:QuizServicesService) { }

ngOnInit(): void {
this.catId=this.route.snapshot.params['catId'];
this.route.params.subscribe((params)=>{
this.catId=params['catId'];
if(this.catId=="AllQuizzes")
{
this.quiz.getActiveQuizzes().subscribe(
(data:any)=>{
this.quizzes=data;
})
}

else
{
this.quiz.getActiveQuizzesOfCategory(this.catId).subscribe((data:any)=>{
this.quizzes=data;
},err=>{
alert("Somyhinh went wrong")
});
}

});

}

}
