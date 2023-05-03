import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperarUsuarioRoutingModule } from './recuperar-usuario-routing.module';
import { RecuperarUsuarioComponent } from './recuperar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
	declarations: [
		RecuperarUsuarioComponent
	],
	imports: [
		CommonModule,
		RecuperarUsuarioRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		NzInputModule,
		NzButtonModule,
		NzIconModule,
		NzDatePickerModule,
	]
})
export class RecuperarUsuarioModule { }
