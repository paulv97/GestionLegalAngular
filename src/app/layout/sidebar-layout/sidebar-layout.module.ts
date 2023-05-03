import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from './sidebar-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';

const routes: Routes = [
	{ path: '', component: SidebarLayoutComponent, children: [
		{ path: 'busqueda', loadChildren: () => import('../../pages/app/busqueda/busqueda.module').then(m => m.BusquedaModule) },
	] }
]

@NgModule({
	declarations: [SidebarLayoutComponent],
	exports: [SidebarLayoutComponent],
	imports: [
		CommonModule,
		SidebarModule,
		RouterModule.forChild(routes),
	]
})
export class SidebarLayoutModule { }
