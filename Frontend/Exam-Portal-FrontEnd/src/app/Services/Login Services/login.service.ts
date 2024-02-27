import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from '../Auth and helper/helper';
@Injectable({
providedIn: 'root'
})
export class LoginService {

constructor(private http:HttpClient) { }
public loginStatusSubject=new Subject<boolean>();

//current user:which is loggedin
public getCurrentUser()
{
return this.http.get(`${baseUrl}/current-user`)
}
//generate token
public generateToken(loginData:any)
{
return this.http.post(`${baseUrl}/generate-token`,loginData)
}

//login user:set token in localstorage
public loginUser(token: string)
{
localStorage.setItem('token',token);
return true;
}
//isLogin:user is logged in or not
public isLoggedIn()
{
let tokenStr=localStorage.getItem("token");
if(tokenStr==undefined||tokenStr==''||tokenStr==null)
{
return false
}
else
{
return true;
}
}
//logout : remove token from local storage
public logout()
{
localStorage.removeItem('token');
localStorage.removeItem('user');
return true;
}
//get token
public getToken()
{
return localStorage.getItem('token');
}
//Set userdetails
public setUser(user: any)
{
localStorage.setItem('user',JSON.stringify(user));
}
//getUser
public getUser()
{
let userStr=localStorage.getItem("user");
if(userStr!=null)
{
return JSON.parse(userStr);
}
else
{
this.logout();
return null;
}
}
//get UserRole
public getUserRole()
{
let user=this.getUser();
return user.authorities[0].authority;
}
}
