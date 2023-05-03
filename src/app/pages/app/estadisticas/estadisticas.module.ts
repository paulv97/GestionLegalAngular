import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticasComponent } from './estadisticas.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
	declarations: [
		EstadisticasComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: EstadisticasComponent },]),
		NzStatisticModule,
		NzIconModule,
	]
})
export class EstadisticasModule { }
