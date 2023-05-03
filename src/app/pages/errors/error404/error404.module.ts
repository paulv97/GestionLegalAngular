import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404.component';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
	declarations: [Error404Component],
	imports: [
		CommonModule,
		RouterModule.forChild([{path: '', component: Error404Component}]),
		NzButtonModule,
	]
})
export class Error404Module { }
