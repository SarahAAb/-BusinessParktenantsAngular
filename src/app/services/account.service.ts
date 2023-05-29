import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { role } from '../data/role';
import { SignIn } from '../data/SignIn';
import { signup } from '../data/signup';
import { userroles } from '../data/userrole';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpclient:HttpClient) {
   }

  SaveRole(obj:role):Observable<any>{
return this.httpclient.post("http://localhost/BusinessParktenants/api/Account/NewRole",obj)
  }
  SignUp(obj:signup):Observable<any>{
    return this.httpclient.post("http://localhost/BusinessParktenants/api/Account/NewUser",obj)
  }
  GetUsers():Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Account/UserList")
  }
  GetUserRoles(id:number):Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Account/UserRoles?UserId="+id)

  }
  Update(obj:userroles[]):Observable<any>{
    return this.httpclient.post("http://localhost/BusinessParktenants/api/Account/Update",obj)
  }

  SignIn(obj:SignIn):Observable<any>{
    return this.httpclient.post("http://localhost/BusinessParktenants/api/Account/Login",obj)
      }
 LogOut():Observable<any>{
 return this.httpclient.get("http://localhost/BusinessParktenants/api/Account/LogOut")
 }
 GetuserInfo(name:string):Observable<any>{
  return this.httpclient.get("http://localhost/BusinessParktenants/api/Account/GetInfo?name="+name)
}
GetRoles(name:string):Observable<any>{
  return this.httpclient.get("http://localhost/BusinessParktenants/api/Account/GetRoles?username="+name)
}
GetEmployees():Observable<any>{
  return this.httpclient.get("http://localhost/BusinessParktenants/api/Account/EmployeeList")
}
}

