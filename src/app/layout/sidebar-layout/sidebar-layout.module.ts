import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from './sidebar-layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', component: SidebarLayoutComponent, children: [
		// { path: 'configuracion/dispositivos', loadChildren: () => import('../../pages/configuracion/dispositivos/dispositivos.module').then(m => m.DispositivosModule) },
	] }
]

@NgModule({
	declarations: [SidebarLayoutComponent],
	exports: [SidebarLayoutComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
	]
})
export class SidebarLayoutModule { }
