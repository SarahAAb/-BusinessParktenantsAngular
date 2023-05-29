import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { company } from '../data/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpclient:HttpClient ) { }
  NewCompany(obj:company):Observable<any>{
    return this.httpclient.post("http://localhost/BusinessParktenants/api/Company/NewCompany",obj)
  }
  GetAll():Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Company/CompanyList")
  }
  Delete(id:number):Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Company/Delete?Id="+id)
  }
  Edit(id:number):Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Company/Edit?Id="+id)
  }
  Update(obj:company):Observable<any>{
    return this.httpclient.post("http://localhost/BusinessParktenants/api/Company/Update",obj)
  }

}
