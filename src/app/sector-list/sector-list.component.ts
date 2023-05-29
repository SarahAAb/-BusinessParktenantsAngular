import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { sector } from '../data/sector';
import { SectorService } from '../services/sector.service';

@Component({
  selector: 'app-sector-list',
  templateUrl: './sector-list.component.html',
  styleUrls: ['./sector-list.component.css']
})
export class SectorListComponent implements OnInit {
  displayedColumns: string[] = ['name']
  lisector!:sector[]
constructor(private sectorservice:SectorService){}
ngOnInit(): void {
  this.getsectors()
}
dataSource:any
getsectors(){
  this.sectorservice.GetAll().subscribe({
    next:data=>{this.lisector=data
    this.dataSource=this.lisector
    },
    error:err=>{alert("Error Happened")
  }})
}
}
