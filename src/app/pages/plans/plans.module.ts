import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { HeaderModule } from "../../shared/components/header/header.module";
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMessageService } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: PlansComponent }
    ]),
    NzInputModule,
    HeaderModule,
    NzCardModule,
    NzSpinModule,
  ],
  providers: [
    NzMessageService,
  ]
})
export class PlansModule { }
