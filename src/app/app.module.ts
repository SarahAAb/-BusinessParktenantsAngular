import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { HomeComponent } from './home/home.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewSectorComponent } from './new-sector/new-sector.component';
import { SectorListComponent } from './sector-list/sector-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { NewComplainComponent } from './new-complain/new-complain.component';
import { ComplainListComponent } from './complain-list/complain-list.component';
import { ComplainHistoryComponent } from './complain-history/complain-history.component';
import { AuthenticationInterceptor } from './interceptor/authentication.interceptor';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { ComplainReplayComponent } from './complain-replay/complain-replay.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent,
    NewCompanyComponent,
    CompanyListComponent,
    HomeComponent,
    NewRoleComponent,
    NewUserComponent,
    NewSectorComponent,
    SectorListComponent,
    UserRolesComponent,
    NewComplainComponent,
    ComplainListComponent,
    ComplainHistoryComponent,
    SuggestionListComponent,
    ComplainReplayComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }) ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthenticationInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
  export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}


