import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/Services/Category Services/category-service.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-view-categories',
templateUrl: './view-categories.component.html',
styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
categories=[
{
title:'',
description:''
}
];
constructor(private category:CategoryServiceService) { }

ngOnInit(): void {
this.category.categories().subscribe(
(data:any)=>{
this.categories=data;
},
err=>{
Swal.fire('Error!!','Error in loading data','error')
});
}

sortCategories() {
this.categories.sort((a, b) => {
return a.title.localeCompare(b.title);
});
}
}
