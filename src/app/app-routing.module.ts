import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'checkout/:token', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
	{ path: 'app', loadChildren: () => import('./layout/sidebar-layout/sidebar-layout.module').then(m => m.SidebarLayoutModule) },
	{ path: '', loadChildren: () => import('./layout/header-layout/header-layout.module').then(m => m.HeaderLayoutModule) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
