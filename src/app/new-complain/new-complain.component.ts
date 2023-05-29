import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { complain } from '../data/complain';
import { user } from '../data/user';
import { AccountService } from '../services/account.service';
import { ComplainService } from '../services/complain.service';
import { SuggestionService } from '../services/suggestion.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-complain',
  templateUrl: './new-complain.component.html',
  styleUrls: ['./new-complain.component.css']
})
export class NewComplainComponent implements OnInit {
  form!:FormGroup
  id!:number
  bag=true
  liEmployees!:user[]
  constructor(private activated:ActivatedRoute,private complainservice:ComplainService,
    private translate:TranslateService,private accountservice:AccountService,private formBuilder:FormBuilder,private suggestionservice:SuggestionService){}
ngOnInit(): void {
  this.GetEmp()
  this.buildform()
  if(this.activated.snapshot.queryParams["Id"]!=undefined){
    this.id=this.activated.snapshot.queryParams["Id"]
    this.Edit(this.id)
  }  
}

  onLanguageChange(lang:string){
//     if(lang=='ar'){
// document.getElementsByTagName("body")[0].dir="rtl";
//     }
//     else{
//       document.getElementsByTagName("body")[0].dir="ltr";

//     }
this.translate.use(lang)
  }
buildform(){
  this.form=this.formBuilder.group({
    id:['',''],
    name:[,Validators.required],
    phone:[,Validators.required],
    title:[,Validators.required],
    details:[,Validators.required],
    userId:[,]
  })}

SaveData(){
  if(this.form.valid){
    var obj=new complain()
    obj.name=this.form.value['name']
    obj.phone=this.form.value['phone']
    obj.title=this.form.value['title']
    obj.details=this.form.value['details']
  this.complainservice.NewComplain(obj).subscribe({
    next:data=>{alert("Saved Successfully")},
    error:err=>{alert("ErrorHappened")}
  })
}
}
Save(){
  if(this.form.valid){
    var obj=new complain()
    obj.name=this.form.value['name']
    obj.phone=this.form.value['phone']
    obj.title=this.form.value['title']
    obj.details=this.form.value['details']
  this.suggestionservice.NewSuggestion(obj).subscribe({
    next:data=>{alert("Saved Successfully")},
    error:err=>{alert("ErrorHappened")}
  })
}
}

GetEmp(){
this.accountservice.GetEmployees().subscribe({
  next:data=>{this.liEmployees=data},
    error:err=>{alert("Error Happened")
  }})}
  Edit(id:number){
    this.bag=false
    this.complainservice.Edit(this.id).subscribe({
    next:data=>{
     this.form.controls['id'].setValue(data.id)
     this.form.controls['name'].setValue(data.name)
     this.form.controls['phone'].setValue(data.phone)
     this.form.controls['title'].setValue(data.title)
     this.form.controls['details'].setValue(data.details)
     this.form.controls['userId'].setValue(data.userId)
   },
    error:err=>{alert("Error Happened")}
    })
    }
    Update(){
      if(this.form.valid){
        var obj=new complain()
        obj.id=this.form.value['id']
        obj.name=this.form.value['name']
        obj.phone=this.form.value['phone']
        obj.title=this.form.value['title']
        obj.details=this.form.value['details']
        obj.userId=this.form.value['userId']
      this.complainservice.Update(obj).subscribe({
        next:data=>{alert("Assigned Successfully")},
        error:err=>{alert("Error Happened")}
      })
      }
      }
    }


