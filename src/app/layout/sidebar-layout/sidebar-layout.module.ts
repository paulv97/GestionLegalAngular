import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from './sidebar-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
	{ path: '', component: SidebarLayoutComponent, children: [
		{ 
			path: 'busqueda', 
			loadChildren: () => import('../../pages/app/busqueda/busqueda.module').then(m => m.BusquedaModule), 
			canActivate: [AuthGuard] 
		},
		{
			path: 'clientes', 
			loadChildren: () => import('../../pages/app/clientes/clientes.module').then(m => m.ClientesModule), 
			canActivate: [AuthGuard] 
		},
		{ 
			path: 'recursos', 
			loadChildren: () => import('../../pages/app/recursos/recursos.module').then(m => m.RecursosModule),
			canActivate: [AuthGuard] 
		},
		{ 
			path: 'estadisticas', 
			loadChildren: () => import('../../pages/app/estadisticas/estadisticas.module').then(m => m.EstadisticasModule),
			canActivate: [AuthGuard] 
		},
		{ 
			path: 'create-blog', 
			loadChildren: () => import('../../pages/create-blog/create-blog.module').then(m => m.CreateBlogModule),
			canActivate: [AuthGuard] 
		},
		{ 
			path: 'documentos', 
			loadChildren: () => import('../../pages/documentos/documentos.module').then(m => m.DocumentosModule),
			canActivate: [AuthGuard] 
		},
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
