import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/Services/Category Services/category-service.service';
import Swal from 'sweetalert2';

@Component({
selector: 'app-add-category',
templateUrl: './add-category.component.html',
styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
category={
title:'',
description:''
}
constructor(private _category:CategoryServiceService) { }

ngOnInit(): void {
}
formSubmit()
{
if(this.category.title.trim()==''||this.category.description.trim()==''||this.category==null)
{
Swal.fire({
icon: 'error',
title: 'Oops...',
text: 'All fields are Required!',
})
return;
}
this._category.addcategory(this.category).subscribe(
(data:any)=>{
this.category.title='';
this.category.description='';
Swal.fire('Success','Category added successfully','success');
},
err=>{
Swal.fire({
 icon: 'error',
 title: 'Oops...',
 text: 'Something went wrong!',
 })
});
}


}
