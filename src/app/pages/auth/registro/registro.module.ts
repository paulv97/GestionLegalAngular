import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [RegistroComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{path: '', component: RegistroComponent}]),
		FormsModule,
		ReactiveFormsModule,
		NzInputModule,
		NzButtonModule,
		NzDatePickerModule,
	]
})
export class RegistroModule { }
