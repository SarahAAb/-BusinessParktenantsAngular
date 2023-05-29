import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignIn } from '../data/SignIn';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup
  name!:string
  en!:string
  constructor(private formBuilder:FormBuilder,
             private accountService:AccountService,
             private router:Router,
             ){}

  ngOnInit(): void {
    this.buildForm()  
  }

    buildForm(){
    this.form=this.formBuilder.group({
      email:[,Validators.compose([Validators.required,Validators.email])],
      password:[,Validators.required],
    })
  }
  onLogin(){
    if(this.form.valid){
      var user=new SignIn()
      user.email=this.form.value["email"];
      user.password=this.form.value["password"]
      this.accountService.SignIn(user).subscribe({
        next:data=>{
        localStorage.setItem("userToken",data.token)
this.name=this.form.value["email"]
this.router.navigate(['/home/Dashboard'])
this.accountService.GetuserInfo(this.name).subscribe({
next:data=>{
  debugger
  localStorage.setItem("user", data.id)
this.accountService.GetRoles(this.name).subscribe({
next:data=>{
localStorage.setItem("Roles",data[0])
},
error:err=>{alert("Error Happened")}
})
},
error:err=>{alert("Error Happened")}
})

        },
        error:err=>{
          alert("Error happned")
        }
      })
      
    }
  }
}

