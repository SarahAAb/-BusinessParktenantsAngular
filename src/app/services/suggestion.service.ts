import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { suggestion } from '../data/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private httpclient:HttpClient ) { }
  NewSuggestion(obj:suggestion):Observable<any>{
    return this.httpclient.post("http://localhost/BusinessParktenants/api/Suggestion/NewSuggestion",obj)
  }
  GetAll():Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Suggestion/SuggestionList")
  }
  GetCompalins(id:string):Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Suggestion/SuggestionAssigned?userId="+id)
  }
  Edit(id:number):Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Suggestion/Edit?Id="+id)
  }
  Update(obj:suggestion):Observable<any>{
    return this.httpclient.post("http://localhost/BusinessParktenants/api/Suggestion/Assign",obj)
  }
  Getno():Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Suggestion/Suggestionno")
  }


}
