import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/Login Services/login.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginData=
{
username:'',
password:''
}
constructor(private loginService:LoginService,private router:Router) { }

ngOnInit(): void {
}

formSubmit()
{
if(this.loginData.username.trim()==''||this.loginData==null)
{
Swal.fire({
icon: 'error',
title: 'Oops...',
text: 'Username is Required!',
})
}
if(this.loginData.password.trim()==''||this.loginData==null)
{
Swal.fire({
icon: 'error',
title: 'Oops...',
text: 'Password is Required!',
})
}

//request to server to generate token
this.loginService.generateToken(this.loginData).subscribe((data:any)=>{
console.log("success");
console.log(data);
//login..
this.loginService.loginUser(data.token);
this.loginService.getCurrentUser().subscribe(
(user:any)=>{
this.loginService.setUser(user);
console.log(user);
//redirect.....ADMIN: admin-dashboard
if(this.loginService.getUserRole()=="ADMIN")
{
//admin dashboard
//window.location.href='/admin-dashboard';
this.router.navigate(['admin-dashboard']);
this.loginService.loginStatusSubject.next(true);
}
//redirect.....USER: user-dashboard
else if(this.loginService.getUserRole()=="USER")
{
//User dashboard
//window.location.href='/user-dashboard';
this.router.navigate(['user-dashboard/AllQuizzes']);
this.loginService.loginStatusSubject.next(true);
}
else
{
this.loginService.logout();
}
});

},
err=>{
//error
Swal.fire({
icon: 'error',
title: 'Oops...',
text: 'Invalid Login Details,Try again!!',
});
//end
});


}

}
