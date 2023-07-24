import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoJuicioComponent } from './nuevo-juicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';

@NgModule({
	declarations: [NuevoJuicioComponent],
	exports: [NuevoJuicioComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NzInputModule,
		NzButtonModule,
		NzModalModule,
		NzMessageModule,
		NzSelectModule,
	]
})
export class NuevoJuicioModule { }
