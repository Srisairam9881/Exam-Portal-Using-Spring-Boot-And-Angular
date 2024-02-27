import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/Login Services/login.service';

@Component({
selector: 'app-profile',
templateUrl: './profile.component.html',
styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

user!:any;

constructor(private login:LoginService) { }

ngOnInit(): void {
this.user=this.login.getUser();

/*this.login.getCurrentUser().subscribe(
(user:any)=>{
this.user=user;
},
err=>{
alert("error");
});
*/

}

}
