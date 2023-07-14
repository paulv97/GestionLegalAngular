import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentosComponent } from './documentos.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { HeaderModule } from "../../shared/components/header/header.module";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMessageService } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    DocumentosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: DocumentosComponent }
    ]),
    NzInputModule,
    HeaderModule,
    NzCardModule,
    NzButtonModule
  ],
  providers: [
    NzMessageService,
  ]
})
export class DocumentosModule { }
