import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { ComplainHistoryComponent } from './complain-history/complain-history.component';
import { ComplainListComponent } from './complain-list/complain-list.component';
import { ComplainReplayComponent } from './complain-replay/complain-replay.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { suggestion } from './data/suggestion';
import { AuthenticationGuard } from './guards/authentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { NewComplainComponent } from './new-complain/new-complain.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { NewSectorComponent } from './new-sector/new-sector.component';
import { NewUserComponent } from './new-user/new-user.component';
import { SectorListComponent } from './sector-list/sector-list.component';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserRolesComponent } from './user-roles/user-roles.component';

const routes: Routes = [
{path:"NewComplain",component:NewComplainComponent},
{path:"",component:LoginComponent},
{path:"home",component:HomeComponent,canActivate:[AuthenticationGuard],children:[
{path:"UserRoles" ,component:UserRolesComponent},
{path:'CompanyList',component:CompanyListComponent},
{path:'NewCompany',component:NewCompanyComponent},
{path:'NewRole',component:NewRoleComponent},
{path:'NewUser',component:NewUserComponent},
{path:'UserList',component:UserListComponent},
{path:'NewSector',component:NewSectorComponent},
{path:'SectorList',component:SectorListComponent},
{path:'ComplainList',component:ComplainListComponent},
{path:'ComplainHistory',component:ComplainHistoryComponent},
{path:'SuggestionList',component:SuggestionListComponent},
{path:'ComplainReplay',component:ComplainReplayComponent},
{path:'Dashboard',component:DashboardComponent}
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
