import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateBlogComponent } from './create-blog.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { HeaderModule } from "../../shared/components/header/header.module";
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

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
    NzInputModule,
    NzMessageModule,
    ReactiveFormsModule,
    NzButtonModule,
  ],
  providers: [
    NzMessageService,
  ]
})
export class CreateBlogModule { }
