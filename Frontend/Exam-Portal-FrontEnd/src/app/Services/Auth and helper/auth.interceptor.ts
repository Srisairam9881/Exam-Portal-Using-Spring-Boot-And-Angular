import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "../Login Services/login.service";

//const TOKEN_HEADER='Authorization';
@Injectable()
export class AuthInterceptor implements HttpInterceptor
{ 
constructor(private login:LoginService){}
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//add the jwt token(localstorge) request
let authreq=req;
const token=this.login.getToken();
if(token!=null)
{
authreq=authreq.clone({setHeaders:{Authorization:`Bearer ${token}`}
});
}
return next.handle(authreq);
}
}
export const authInterceptorProviders=[
{
provide:HTTP_INTERCEPTORS,
useClass:AuthInterceptor,
multi:true
}
];