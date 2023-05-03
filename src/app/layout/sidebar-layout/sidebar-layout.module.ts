import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from './sidebar-layout.component';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

const routes: Routes = [
	{ path: '', component: SidebarLayoutComponent, children: [
		{ path: 'inicio', loadChildren: () => import('../../pages/inicio/inicio.module').then(m => m.InicioModule) },
		{ path: 'cuentas', loadChildren: () => import('../../pages/cuentas/listado-cuentas/listado-cuentas.module').then(m => m.ListadoCuentasModule) },
		{ path: 'cuentas/:numeroCuenta', loadChildren: () => import('../../pages/cuentas/ver-cuenta/ver-cuenta.module').then(m => m.VerCuentaModule) },
		{ path: 'garantias', loadChildren: () => import('../../pages/garantias/listado-garantias/listado-garantias.module').then(m => m.ListadoGarantiasModule) },
		{ path: 'pagos', loadChildren: () => import('../../pages/pagos/listado-pagos/listado-pagos.module').then(m => m.ListadoPagosModule) },
		{ path: 'transferencias/internas', loadChildren: () => import('../../pages/transferencias/transf-internas/transf-internas.module').then(m => m.TransfInternasModule) },
		{ path: 'transferencias/externas', loadChildren: () => import('../../pages/transferencias/transf-externas/transf-externas.module').then(m => m.TransfExternasModule) },
		{ path: 'configuracion/dispositivos', loadChildren: () => import('../../pages/configuracion/dispositivos/dispositivos.module').then(m => m.DispositivosModule) },
	] }
]

@NgModule({
	declarations: [SidebarLayoutComponent],
	exports: [SidebarLayoutComponent],
	imports: [
		CommonModule,
		SidebarModule,
		HeaderModule,
		RouterModule.forChild(routes),
	]
})
export class SidebarLayoutModule { }
