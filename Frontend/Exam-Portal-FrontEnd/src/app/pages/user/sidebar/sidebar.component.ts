import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/Services/Category Services/category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  categories: any;
  constructor(private cat:CategoryServiceService) { }

  ngOnInit(): void {
    this.cat.categories().subscribe(
    (data:any)=>{
     this.categories=data;
    },
    err=>{
    Swal.fire('Oh!Sorry','Server Busy,please try again','error');
    });
  }

}
