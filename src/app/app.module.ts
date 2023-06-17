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
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
