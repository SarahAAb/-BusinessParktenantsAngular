import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { company } from '../data/company';
import { sector } from '../data/sector';
import { CompanyService } from '../services/company.service';
import { SectorService } from '../services/sector.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {
  lisector!:sector[]
  form!:FormGroup
  id!:number
  bag=true

  constructor(private sectorservice:SectorService,private companyservice:CompanyService,
              private formBuilder:FormBuilder,private activated:ActivatedRoute ){}
ngOnInit(): void {
  this.buildform()
  this.getsector()
  if(this.activated.snapshot.queryParams["Id"]!=undefined){
    this.id=this.activated.snapshot.queryParams["Id"]
    this.Edit(this.id)
  }  
}
getsector(){
  this.sectorservice.GetAll().subscribe({
    next:data=>{this.lisector=data},
    error:err=>{alert("Error Happened")
  }})

}
buildform(){
  this.form=this.formBuilder.group({
    id:['',''],
    name:[,Validators.required],
    phone:[,Validators.required],
    sectorId:['',''],
    size:[,Validators.required]
  })}

SaveData(){
  if(this.form.valid){
    var obj=new company()
    obj.name=this.form.value['name']
    obj.phone=this.form.value['phone']
    obj.sectorId=this.form.value['sectorId']
    obj.size=this.form.value['size']
  this.companyservice.NewCompany(obj).subscribe({
    next:data=>{if(data==true){
      alert("Saved Successfully")
      this.bag=false
console.log(obj)
    }
    else
    {alert("Company name already exist")}},
    error:err=>{alert("ErrorHappened")}
  })
}
}

  Edit(id:number){
    this.bag=false
    this.companyservice.Edit(this.id).subscribe({
    next:data=>{
      debugger
     this.form.controls['id'].setValue(data.id)
     this.form.controls['name'].setValue(data.name)
     this.form.controls['phone'].setValue(data.phone)
     this.form.controls['sectorId'].setValue(data.sectorId)
     this.form.controls['size'].setValue(data.size)
    },
    error:err=>{alert("Error Happened")}
    })
    }
    Update(){
      debugger
      if(this.form.valid){
        var obj=new company()
        obj.id=this.form.value['id']
        obj.name=this.form.value['name']
        obj.phone=this.form.value['phone']
        obj.sectorId=this.form.value['sectorId']
        obj.size=this.form.value['size']
      this.companyservice.Update(obj).subscribe({
        next:data=>{alert("Updated Successfully")},
        error:err=>{alert("Error Happened")}
      })
      }
      }
    }
    