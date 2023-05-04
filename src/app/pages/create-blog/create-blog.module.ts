import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../shared/components/header/header.module';
import { CreateBlogComponent } from './create-blog.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';



@NgModule({
  declarations: [
    CreateBlogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CreateBlogComponent }
    ]),
    HeaderModule,
    NzDropDownModule,
    NzInputModule
  ]
})
export class CreateBlogModule { }
