import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosJudicialesComponent } from './servicios-judiciales.component';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
	declarations: [
		ServiciosJudicialesComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: ServiciosJudicialesComponent },]),
		NzInputModule,
		LeafletModule,
		NzSelectModule,
		NzButtonModule,
		NzIconModule,
	]
})
export class ServiciosJudicialesModule { }
