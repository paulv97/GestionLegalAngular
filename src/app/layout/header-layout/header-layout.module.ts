import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderLayoutComponent } from './header-layout.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

const routes: Routes = [
	{ path: '', component: HeaderLayoutComponent, children: [
		// { path: 'configuracion/dispositivos', loadChildren: () => import('../../pages/configuracion/dispositivos/dispositivos.module').then(m => m.DispositivosModule) },
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
