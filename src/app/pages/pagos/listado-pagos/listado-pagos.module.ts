import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoPagosComponent } from './listado-pagos.component';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
	declarations: [ListadoPagosComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{path: '', component: ListadoPagosComponent}]),
		NzInputModule,
	]
})
export class ListadoPagosModule { }
