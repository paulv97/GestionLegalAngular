import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarUsuarioComponent } from './recuperar-usuario.component';

const routes: Routes = [
	{ path: '', component: RecuperarUsuarioComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RecuperarUsuarioRoutingModule { }
