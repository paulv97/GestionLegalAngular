import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderLayoutComponent } from './header-layout.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
// import { LoginModule } from '../../pages/login/login.module';

const routes: Routes = [
	{ path: '', component: HeaderLayoutComponent, children: [
		{ path: 'servicios-judiciales', loadChildren: () => import('../../pages/servicios-judiciales/servicios-judiciales.module').then(m => m.ServiciosJudicialesModule) },
		{ path: 'preguntas-frecuentes', loadChildren: () => import('../../pages/preguntas-frecuentes/preguntas-frecuentes.module').then(m => m.PreguntasFrecuentesModule) },
		{ path: 'login', loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginModule) },
		{ path: 'registro', loadChildren: () => import('../../pages/registro/registro.module').then(m => m.RegistroModule) },
	] }
]

@NgModule({
	declarations: [HeaderLayoutComponent],
	exports: [HeaderLayoutComponent],
	imports: [
		CommonModule,
		HeaderModule,
		RouterModule.forChild(routes),
	]
})
export class HeaderLayoutModule { }
