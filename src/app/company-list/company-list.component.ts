import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { company } from '../data/company';
import { CompanyService } from '../services/company.service';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'phone','operation'];
licompany!:company[]
dataSource:any
filename='ExcelSheet.xlsx' ;
constructor(private companyservices:CompanyService,private router:Router){}
ngOnInit(): void {
  this.getcompanies()
}
Update(id:number){
  this.router.navigate(['/home/NewCompany'],{queryParams:{Id:id}})
    }
    Delete(id:number){
this.companyservices.Delete(id).subscribe({
  next:data=>{alert("Deleted Successed")
  this.getcompanies()
  },
  
    error:err=>{alert("Error happened")}
  })
  

    }
    ExporttoExcel():void{
      let element=document.getElementById('excel-table');
      const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);

      const wb:XLSX.WorkBook=XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      XLSX.writeFile(wb, this.filename)
    }
getcompanies(){
  this.companyservices.GetAll().subscribe({
    next:data=>{this.licompany=data
      this.dataSource=this.licompany},
      error:err=>{alert("Error Happened")
    }})}}
