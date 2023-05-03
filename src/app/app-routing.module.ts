import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) },
	{ path: 'registro', loadChildren: () => import('./pages/auth/registro/registro.module').then(m => m.RegistroModule) },
	{ path: 'recuperar-clave', loadChildren: () => import('./pages/auth/recuperar-clave/recuperar-clave.module').then(m => m.RecuperarClaveModule) },
	{ path: 'recuperar-usuario', loadChildren: () => import('./pages/auth/recuperar-usuario/recuperar-usuario.module').then(m => m.RecuperarUsuarioModule) },
	{ path: '', loadChildren: () => import('./layout/sidebar-layout/sidebar-layout.module').then(m => m.SidebarLayoutModule) },
	{ path: '**', loadChildren: () => import('./pages/errors/error404/error404.module').then(m => m.Error404Module) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
