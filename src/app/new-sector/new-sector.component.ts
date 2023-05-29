import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sector } from '../data/sector';
import { SectorService } from '../services/sector.service';

@Component({
  selector: 'app-new-sector',
  templateUrl: './new-sector.component.html',
  styleUrls: ['./new-sector.component.css']
})
export class NewSectorComponent implements OnInit{
  form!:FormGroup

constructor(private formBuilder:FormBuilder,private sectorservice:SectorService){}
ngOnInit(): void {
  this.buildForm()  
}
buildForm(){
  this.form=this.formBuilder.group({
    name:[,Validators.required],
  })}
  SaveData(){
      if(this.form.valid){
      var obj=new sector()
      obj.name=this.form.value['name']
      
    this.sectorservice.SaveData(obj).subscribe({
      next:data=>{alert("Saved Successfully")},
      error:err=>{alert("Error Happened")}
    })
    }
    }}
    