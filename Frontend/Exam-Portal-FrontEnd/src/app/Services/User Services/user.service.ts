import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../Auth and helper/helper';
@Injectable({
providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient) { }
//add User
public addUser(user:any){
return this.http.post(`${baseUrl}/user/`,user);
}
// Get all normal users
public getAllUsers(){
console.log('Fetching all users...');
return this.http.get(`${baseUrl}/user/users/all/`);
}
// Get all Admins users
public getAllAdmins(){
console.log('Fetching all users...');
return this.http.get(`${baseUrl}/user/admins/all/`);
}
}
