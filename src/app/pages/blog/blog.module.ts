import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { HeaderModule } from "../../shared/components/header/header.module";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';



@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: BlogComponent }
    ]),
    NzInputModule,
    NzDropDownModule,
    NzMessageModule,
    HeaderModule,
    NzCardModule,
    NzButtonModule,
    ReactiveFormsModule,
  ],
  providers: [
    NzMessageService,
  ]
})
export class BlogModule { }
