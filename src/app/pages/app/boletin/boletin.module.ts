import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoletinComponent } from './boletin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BoletinComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BoletinComponent },]),
  ]
})
export class BoletinModule { }
