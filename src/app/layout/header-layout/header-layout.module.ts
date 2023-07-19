import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderLayoutComponent } from './header-layout.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';

const routes: Routes = [
	{ path: '', component: HeaderLayoutComponent, children: [
		{ path: '', loadChildren: () => import('../../pages/index/index.module').then(m => m.IndexModule) },
		{ path: 'servicios-judiciales', loadChildren: () => import('../../pages/servicios-judiciales/servicios-judiciales.module').then(m => m.ServiciosJudicialesModule) },
		{ path: 'preguntas-frecuentes', loadChildren: () => import('../../pages/preguntas-frecuentes/preguntas-frecuentes.module').then(m => m.PreguntasFrecuentesModule) },
		{ path: 'login', loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginModule) },
		{ path: 'signup', loadChildren: () => import('../../pages/registro/registro.module').then(m => m.RegistroModule) },	
		{ path: 'plans', loadChildren: () => import('../../pages/plans/plans.module').then(m => m.PlansModule) },
		{ path: 'about', loadChildren: () => import('../../pages/about/about.module').then(m => m.AboutModule) }, 
		{ path: 'contacto', loadChildren: () => import('../../pages/contacto/contacto.module').then(m => m.ContactoModule) },
		{ path: 'blogs', loadChildren: () => import('../../pages/blogs/blogs.module').then(m => m.BlogsModule) },
		{ path: 'blog/:id_Blog', loadChildren: () => import('../../pages/blog/blog.module').then(m => m.BlogModule) },] }
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
