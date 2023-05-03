import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosJudicialesComponent } from './servicios-judiciales.component';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		ServiciosJudicialesComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: ServiciosJudicialesComponent },]),
		NzInputModule,
	]
})
export class ServiciosJudicialesModule { }
