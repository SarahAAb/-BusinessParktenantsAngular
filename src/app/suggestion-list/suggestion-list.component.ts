import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { company } from '../data/company';
import { suggestion } from '../data/suggestion';
import { CompanyService } from '../services/company.service';
import { SuggestionService } from '../services/suggestion.service';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'phone','title','details'];
lisuggest!:suggestion[]
dataSource:any

constructor(private suggestionservice:SuggestionService,private router:Router){}
ngOnInit(): void {
  this.getsuggestion()
}

    
getsuggestion(){
  this.suggestionservice.GetAll().subscribe({
    next:data=>{this.lisuggest=data
      this.dataSource=this.lisuggest},
      error:err=>{alert("Error Happened")
    }})}}
