import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { complain } from '../data/complain';
import { AccountService } from '../services/account.service';
import { ComplainService } from '../services/complain.service';

@Component({
  selector: 'app-complain-replay',
  templateUrl: './complain-replay.component.html',
  styleUrls: ['./complain-replay.component.css']
})
export class ComplainReplayComponent {
  form!:FormGroup
  id!:number
  constructor(private activated:ActivatedRoute,private complainservice:ComplainService,
            private accountservice:AccountService,private formBuilder:FormBuilder){}
            ngOnInit(): void {
            
              this.buildform()
              if(this.activated.snapshot.queryParams["Id"]!=undefined){
                this.id=this.activated.snapshot.queryParams["Id"]
                this.Edit(this.id)
              }  
            }
            
            buildform(){
              this.form=this.formBuilder.group({
                id:['',''],
                name:[,],
                phone:[,],
                title:[,],
                details:[,],
                userId:[,],
                note:[,],
                status:[,],
              })}
              Edit(id:number){
                this.complainservice.EditReplay(this.id).subscribe({
                next:data=>{
                 this.form.controls['id'].setValue(data.id)
                 this.form.controls['name'].setValue(data.name)
                 this.form.controls['phone'].setValue(data.phone)
                 this.form.controls['title'].setValue(data.title)
                 this.form.controls['details'].setValue(data.details)
                 this.form.controls['userId'].setValue(data.userId)

                 this.form.controls['note'].setValue(data.note)
                 this.form.controls['status'].setValue(data.status)
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
                    obj.note=this.form.value['note']
                    obj.status=this.form.value['status']
                  this.complainservice.UpdateReplay(obj).subscribe({
                    next:data=>{alert("Successfully Replay")},
                    error:err=>{alert("Error Happened")}
                  })
                  }
                  }
                }
            

