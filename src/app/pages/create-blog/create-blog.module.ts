import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../../shared/components/header/header.module';
import { CreateBlogComponent } from './create-blog.component';



@NgModule({
  declarations: [
    CreateBlogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: CreateBlogModule }
    ]),
    HeaderModule
  ]
})
export class CreateBlogModule { }
