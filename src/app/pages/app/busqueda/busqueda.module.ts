import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SearchPipeModule } from 'src/app/shared/pipes/search/search.module';
import { NuevoJuicioModule } from './nuevo-juicio/nuevo-juicio.module';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
	declarations: [
		BusquedaComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: BusquedaComponent },]),
		NzInputModule,
		NzButtonModule,
		NzIconModule,
		SearchPipeModule,
		NuevoJuicioModule,
		NzModalModule,
	]
})
export class BusquedaModule { }
