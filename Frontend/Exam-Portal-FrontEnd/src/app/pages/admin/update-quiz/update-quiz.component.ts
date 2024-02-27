import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/Services/Category Services/category-service.service';
import { QuizServicesService } from 'src/app/Services/Quiz Services/quiz-services.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-update-quiz',
templateUrl: './update-quiz.component.html',
styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

constructor(private route:ActivatedRoute,private _quiz:QuizServicesService,private cat:CategoryServiceService,private router:Router) { }
qid=0;
quiz: any;
categories: any;
ngOnInit(): void {
this.qid=this.route.snapshot.params['qid'];
this._quiz.getQuiz(this.qid).subscribe(
(data:any)=>{
this.quiz=data;
});

this.cat.categories().subscribe(
(data:any)=>{
this.categories=data;
})

}
//update form
updateForm()
{
this._quiz.updateQuiz(this.quiz).subscribe(
(data)=>{
Swal.fire('Success','Quiz has been updated','success').then((e=>{
this.router.navigate(['admin-dashboard/quizzes'])
}));
},
err=>{
Swal.fire('Error','Something went wrong','error');
});
}

}
