import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{path: '', component: LoginComponent}]),
		NzInputModule,
		NzButtonModule,
		FormsModule,
		ReactiveFormsModule,
		NzModalModule,
	]
})
export class LoginModule { }
