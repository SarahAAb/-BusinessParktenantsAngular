import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { role } from '../data/role';
import { AccountService } from '../services/account.service';
import { SectorService } from '../services/sector.service';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent implements OnInit{
  form!:FormGroup

constructor(private formBuilder:FormBuilder,private accountservice:AccountService){}
ngOnInit(): void {
  this.buildForm()  
}
buildForm(){
  this.form=this.formBuilder.group({
    name:[,Validators.required],
  })}
  SaveData(){
      if(this.form.valid){
      var obj=new role()
      obj.name=this.form.value['name']
      
    this.accountservice.SaveRole(obj).subscribe({
      next:data=>{alert("Saved Successfully")},
      error:err=>{alert("Error Happened")}
    })
    }
    }}