import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsServiceService } from 'src/app/Services/Questions Services/questions-service.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-add-questions',
templateUrl: './add-questions.component.html',
styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
qId: any;
qTitle:any;
question={
quiz:{
qid:''
},
content:'',
option1:'',
option2:'',
option3:'',
option4:'',
answer:''
};
constructor(private route:ActivatedRoute,private addquestion:QuestionsServiceService) { }

ngOnInit(): void {
this.qId=this.route.snapshot.params['qid'];
this.qTitle=this.route.snapshot.params['title'];
this.question.quiz['qid']=this.qId;
}

formSubmit()
{
if(this.question.content==null || this.question.content.trim()=='')
{
Swal.fire("Error","Please Fill Content","error");
return
}
if(this.question.option1.trim()==''|| this.question.option1==null)
{
Swal.fire("Error","Please Fill option1","error");
return
}
if(this.question.option2.trim()==''|| this.question.option2==null)
{
Swal.fire("Error","Please Fill option2","error");
return
}
if(this.question.answer.trim()==''|| this.question.answer==null)
{
Swal.fire("Error","Please Fill answer","error");
return
}
//Form Submit
this.addquestion.addQuestion(this.question).subscribe(
(data:any)=>{
this.question.content='';
this.question.option1='';
this.question.option2='';
this.question.option3='';
this.question.option4='';
this.question.answer='';
Swal.fire("Success","Question has been added successfully",'success')
},
err=>{
Swal.fire('Error','Something went wrong,try again after sometime','error');
});
}

}
