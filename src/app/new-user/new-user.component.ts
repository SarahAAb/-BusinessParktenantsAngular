import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signup } from '../data/signup';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  form!:FormGroup
  constructor(private formbuilder:FormBuilder,
              private accountservice:AccountService,
              ){}
ngOnInit(): void {
  debugger
  this.buildForm()
}
buildForm(){
  this.form=this.formbuilder.group({
      FullName:['',Validators.required],
       Email:['',Validators.compose([Validators.required,Validators.email])],
       Password:['',Validators.required],
       ConfirmPassward:['',Validators.required]
})
}

SignUp(){
  if(this.form.valid){
  var obj=new signup()
  obj.fullName=this.form.value['FullName']
  obj.email=this.form.value['Email']
  obj.confirmPassward=this.form.value['ConfirmPassward']
  obj.password=this.form.value['Password']
  this.accountservice.SignUp(obj).subscribe({
    next:data=>{alert("Saved Successfulyy")},
    error:err=>{alert("error happened")}
  })  
}
}
}
