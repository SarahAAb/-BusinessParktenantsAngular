import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    CommonModule,MatButtonModule,MatInputModule,
    MatSidenavModule,MatTableModule,MatIconModule,
    MatListModule,MatButtonToggleModule,MatFormFieldModule,
    MatSelectModule,MatCardModule,MatCheckboxModule
  ,MatGridListModule,MatMenuModule],
  exports:[
    MatButtonModule,MatInputModule,MatSidenavModule,
    MatTableModule,MatIconModule,MatListModule,MatButtonToggleModule,
    MatFormFieldModule,MatSelectModule,MatCardModule,MatCheckboxModule,MatMenuModule,MatGridListModule]
})
export class MaterialModule { }
