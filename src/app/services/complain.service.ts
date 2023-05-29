import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { complain } from '../data/complain';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  constructor(private httpclient:HttpClient ) { }
  NewComplain(obj:complain):Observable<any>{
    return this.httpclient.post("http://localhost/BusinessParktenants/api/Complain/NewComplain",obj)
  }
  GetAll():Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Complain/ComplainList")
  }
  GetCompalins(id:string):Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Complain/ComplainAssigned?userId="+id)
  }
  Edit(id:number):Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Complain/Edit?Id="+id)
  }
  EditReplay(id:number):Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Complain/EditReplay?Id="+id)
  }
  UpdateReplay(obj:complain):Observable<any>{
    return this.httpclient.post("http://localhost/BusinessParktenants/api/Complain/UpdateReplay",obj)
  }

  Update(obj:complain):Observable<any>{
    return this.httpclient.post("http://localhost/BusinessParktenants/api/Complain/Assign",obj)
  }
  Getno():Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Complain/Complainno")
  }
  Getdone():Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Complain/ComplainDone")
  }


}
