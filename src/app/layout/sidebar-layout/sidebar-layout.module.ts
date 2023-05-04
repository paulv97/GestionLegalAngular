import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from './sidebar-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';

const routes: Routes = [
	{ path: '', component: SidebarLayoutComponent, children: [
		{ path: 'busqueda', loadChildren: () => import('../../pages/app/busqueda/busqueda.module').then(m => m.BusquedaModule) },
		{ path: 'recursos', loadChildren: () => import('../../pages/app/recursos/recursos.module').then(m => m.RecursosModule) },
		{ path: 'estadisticas', loadChildren: () => import('../../pages/app/estadisticas/estadisticas.module').then(m => m.EstadisticasModule) },
		{ path: 'create-blog', loadChildren: () => import('../../pages/create-blog/create-blog.module').then(m => m.CreateBlogModule) },
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
