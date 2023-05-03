import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { SliderMarketingModule } from 'src/app/shared/components/slider-marketing/slider-marketing.module';

@NgModule({
	declarations: [InicioComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{path: '', component: InicioComponent}]),
		NgChartsModule,
		SliderMarketingModule,
	]
})
export class InicioModule { }
