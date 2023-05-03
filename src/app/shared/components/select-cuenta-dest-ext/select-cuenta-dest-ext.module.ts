import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCuentaDestExtComponent } from './select-cuenta-dest-ext.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [SelectCuentaDestExtComponent],
	exports: [SelectCuentaDestExtComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
	]
})
export class SelectCuentaDestExtModule { }
