import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User Services/user.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-welcome',
templateUrl: './welcome.component.html',
styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
constructor(private userService: UserService) { }

ngOnInit(): void {

}
}
