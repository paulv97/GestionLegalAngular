import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: RegistroComponent },]),
		NzInputModule,
    NzButtonModule,
  ]
})
export class RegistroModule { }
