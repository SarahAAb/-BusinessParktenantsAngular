import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ComplainService } from '../services/complain.service';
import { SuggestionService } from '../services/suggestion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  cno!:number
  sno!:number
  dno!:number
  constructor(private breakpointObserver: BreakpointObserver,
              private complainservice:ComplainService,private suggestionservice:SuggestionService) {}
ngOnInit(): void {
  this.getComplainNo()
  this.getComplainNoDone()
  this.getSuggestionNo()
}
getComplainNoDone(){
  this.complainservice.Getdone().subscribe({
    next:data=>{this.dno=data},
    error:err=>{alert("Error Happened")}
    
  })
}
getSuggestionNo(){
this.suggestionservice.Getno().subscribe({
  next:data=>{this.sno=data},
  error:err=>{alert("Error Happened")}
  
})
}
getComplainNo(){
this.complainservice.Getno().subscribe({
next:data=>{this.cno=data},
error:err=>{alert("Error Happened")}
})
}
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'No of Complains', cols: 1, rows: 1 },
          { title: 'No of Users', cols: 1, rows: 1 },
           { title:'No of Suggestion', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'No of Complains', cols: 1, rows: 1 },
        { title: 'No of Users', cols: 1, rows: 1 },
       { title: 'No of Suggestion', cols: 1, rows: 1 }
      ];
    })
  );

}
