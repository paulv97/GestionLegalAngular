import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarLayoutModule } from './layout/sidebar-layout/sidebar-layout.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogComponent } from './pages/blog/blog.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { AuthInterceptorInterceptor } from './shared/services/interceptors/auth-interceptor.interceptor';
import { NzMessageModule } from 'ng-zorro-antd/message';

registerLocaleData(es);

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		SidebarLayoutModule,
		NzModalModule,
		LeafletModule,
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'en-US' },
		{ provide: NZ_I18N, useValue: es_ES },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorInterceptor,
			multi: true // Add multi: true to indicate that this interceptor is part of a collection
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
