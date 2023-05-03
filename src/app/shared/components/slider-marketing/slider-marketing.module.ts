import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderMarketingComponent } from './slider-marketing.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
	declarations: [SliderMarketingComponent],
	exports: [SliderMarketingComponent],
	imports: [
		CommonModule,
		IvyCarouselModule,
	]
})
export class SliderMarketingModule { }
