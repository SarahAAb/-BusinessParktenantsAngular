import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { complain } from '../data/complain';
import { ComplainService } from '../services/complain.service';



@Component({
  selector: 'app-complain-history',
  templateUrl: './complain-history.component.html',
  styleUrls: ['./complain-history.component.css']
})

export class ComplainHistoryComponent implements OnInit{
  displayedColumns: string[] = [ 'name', 'phone','title','operation'];
  licomplain!:complain[]
  dataSource:any
  userid=localStorage.getItem("user") as string
  constructor(private complainservices:ComplainService,private router:Router){}
ngOnInit(): void {
  this.getcomplains()
}
Replay(id:number){
  this.router.navigate(['home/ComplainReplay'],{queryParams:{Id:id}})

}
getcomplains(){
  debugger
  this.complainservices.GetCompalins(this.userid).subscribe({
   next:data=>{this.licomplain=data
      this.dataSource=this.licomplain},
      error:err=>{alert("Error Happened")
    }})}}
    
     