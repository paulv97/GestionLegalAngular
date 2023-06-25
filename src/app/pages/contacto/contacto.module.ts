import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { HeaderModule } from "../../shared/components/header/header.module";
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ContactoComponent }
    ]),
    NzInputModule,
    HeaderModule,
    NzCardModule
  ]
})
export class ContactoModule { }
