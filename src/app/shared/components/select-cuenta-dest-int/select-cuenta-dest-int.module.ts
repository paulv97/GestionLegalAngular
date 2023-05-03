import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCuentaDestIntComponent } from './select-cuenta-dest-int.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [SelectCuentaDestIntComponent],
	exports: [SelectCuentaDestIntComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
	]
})
export class SelectCuentaDestIntModule { }
