import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from './sidebar-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarModule } from 'src/app/shared/components/sidebar/sidebar.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

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
		SidebarModule,
		RouterModule.forChild(routes),
	]
})
export class SidebarLayoutModule { }
