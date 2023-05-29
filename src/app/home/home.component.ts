import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  role=localStorage.getItem("Roles")
  constructor(private translate:TranslateService){}
  onLanguageChange(lang:string){
//     if(lang=='ar'){
// document.getElementsByTagName("body")[0].dir="rtl";
//     }
//     else{
//       document.getElementsByTagName("body")[0].dir="ltr";

//     }
this.translate.use(lang)
  }
}
