import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderLayoutComponent } from './header-layout.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

const routes: Routes = [
	{ path: '', component: HeaderLayoutComponent, children: [
		{ path: 'servicios-judiciales', loadChildren: () => import('../../pages/servicios-judiciales/servicios-judiciales.module').then(m => m.ServiciosJudicialesModule) },
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
