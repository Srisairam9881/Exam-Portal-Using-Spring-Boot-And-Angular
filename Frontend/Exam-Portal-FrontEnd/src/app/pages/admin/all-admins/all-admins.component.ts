import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User Services/user.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-all-admins',
templateUrl: './all-admins.component.html',
styleUrls: ['./all-admins.component.css']
})
export class AllAdminsComponent implements OnInit {
users=[
{
username: '',
password: '',
email: '',
firstName: '',
lastName: '',
phoneNo: '',
profile: '',
role:'',
enabled:'',
}
];
displayedColumns: string[] = ['username', 'email', 'fullName', 'phoneNo', 'profile','role','enabled'];
constructor(private userService: UserService) { }

ngOnInit(): void {
this.loadUsers();
}

loadUsers() {
this.userService.getAllAdmins().subscribe(
(data:any)=>{
this.users=data
},
err=>{
Swal.fire('Please try to some later!!','Error to fetching the data','error')
});
}

}