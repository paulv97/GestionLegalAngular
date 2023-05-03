import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoGarantiasRoutingModule } from './listado-garantias-routing.module';
import { ListadoGarantiasComponent } from './listado-garantias.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		ListadoGarantiasComponent
	],
	imports: [
		CommonModule,
		ListadoGarantiasRoutingModule,
		FormsModule,
		NzEmptyModule,
		NzButtonModule,
		NzIconModule,
	]
})
export class ListadoGarantiasModule { }
