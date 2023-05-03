import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsdPipe } from './usd.pipe';

@NgModule({
	declarations: [UsdPipe],
	exports: [UsdPipe],
	imports: [
		CommonModule
	]
})
export class UsdPipeModule { }
