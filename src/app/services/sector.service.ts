import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sector } from '../data/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  constructor(private httpclient:HttpClient) { }
  GetAll():Observable<any>{
    return this.httpclient.get("http://localhost/BusinessParktenants/api/Sector/SectorList")
  }
  SaveData(obj:sector):Observable<any>{
     return this.httpclient.post("http://localhost/BusinessParktenants/api/Sector/NewSector",obj)
  }
  

}
