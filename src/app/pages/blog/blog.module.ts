import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { HeaderModule } from "../../shared/components/header/header.module";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';

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
    HeaderModule,
    NzCardModule,
    NzButtonModule
  ]
})
export class BlogModule { }
