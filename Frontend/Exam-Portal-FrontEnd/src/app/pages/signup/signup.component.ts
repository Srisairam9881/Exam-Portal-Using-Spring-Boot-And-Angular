import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User Services/user.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-signup',
templateUrl: './signup.component.html',
styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

user=
{
username:'',
password:'',
email:'',
firstName:'',
lastName:'',
phoneNo:'',
profile:'',
}

constructor(private userService:UserService) { }

ngOnInit(): void {
}

formSubmit()
{
if(this.user.username==''|| this.user==null)
{
Swal.fire({
icon: 'error',
title: 'Oops...',
text: 'Username is Required!',
})
return;
}
//adduser:userService
this.userService.addUser(this.user).subscribe((data)=>{
//success
this.user.firstName='';
this.user.lastName='';
this.user.email='';
this.user.username='';
this.user.password='';
this.user.phoneNo='';
Swal.fire('Success','You have succesfully registered','success');
//end
},
err=>{
//error
Swal.fire({
icon: 'error',
title: 'Oops...',
text: 'Username is already Exist,please try another Username!',
})
//end
});

}

}
