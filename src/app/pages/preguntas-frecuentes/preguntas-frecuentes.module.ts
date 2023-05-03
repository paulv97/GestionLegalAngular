import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchPipeModule } from 'src/app/shared/pipes/search/search.module';

@NgModule({
	declarations: [
		PreguntasFrecuentesComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([{ path: '', component: PreguntasFrecuentesComponent },]),
		NzInputModule,
		SearchPipeModule,
	]
})
export class PreguntasFrecuentesModule { }
