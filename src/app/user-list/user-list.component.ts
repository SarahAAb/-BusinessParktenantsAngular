import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../data/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  liUsers!:user[]
  displayedColumns: string[] = ['name', 'email', 'symbol'];
  dataSource:any

  constructor(private router:Router,
              private accountservice:AccountService){}
 ngOnInit(): void {
 this.GetAllusers()
              }
GetAllusers(){
  this.accountservice.GetUsers().subscribe({
    next:data=>{this.liUsers=data
      this.dataSource=this.liUsers
    },
    error:err=>{alert("Error happened")}
  })
}
  UserRoles(userId:string){
this.router.navigate(['/home/UserRoles'],{queryParams:{Id:userId}})
  }


}
