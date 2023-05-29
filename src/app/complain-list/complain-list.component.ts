import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { complain } from '../data/complain';
import { AccountService } from '../services/account.service';
import { ComplainService } from '../services/complain.service';

@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list.component.html',
  styleUrls: ['./complain-list.component.css']
})
export class ComplainListComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'phone','title','operation'];
licomplain!:complain[]
dataSource:any

constructor(private complainservices:ComplainService,private router:Router){}
ngOnInit(): void {
  this.getcomplains()
}
Assign(id:string){
  this.router.navigate(['/NewComplain'],{queryParams:{Id:id}})
    }
getcomplains(){
  this.complainservices.GetAll().subscribe({
    next:data=>{this.licomplain=data
      this.dataSource=this.licomplain},
      error:err=>{alert("Error Happened")
    }})}}