import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoGarantiasComponent } from './listado-garantias.component';

const routes: Routes = [
	{ path: '', component: ListadoGarantiasComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ListadoGarantiasRoutingModule { }
