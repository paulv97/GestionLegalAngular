import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCuentasComponent } from './listado-cuentas.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
	declarations: [ListadoCuentasComponent],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([{path: '', component: ListadoCuentasComponent}]),
		NzEmptyModule,
		NzButtonModule,
		NzIconModule,
	]
})
export class ListadoCuentasModule { }
