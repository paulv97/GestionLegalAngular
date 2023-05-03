import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursosComponent } from './recursos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SearchPipeModule } from 'src/app/shared/pipes/search/search.module';

@NgModule({
	declarations: [
		RecursosComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: RecursosComponent },]),
		NzInputModule,
		NzButtonModule,
		NzIconModule,
		SearchPipeModule,
	]
})
export class RecursosModule { }
