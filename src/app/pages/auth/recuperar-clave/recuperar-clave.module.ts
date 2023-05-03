import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperarClaveRoutingModule } from './recuperar-clave-routing.module';
import { RecuperarClaveComponent } from './recuperar-clave.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
	declarations: [RecuperarClaveComponent],
	imports: [
		CommonModule,
		RecuperarClaveRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		NzInputModule,
		NzButtonModule,
		NzDatePickerModule,
		NzModalModule,
	]
})
export class RecuperarClaveModule { }
