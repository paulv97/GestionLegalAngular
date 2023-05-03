import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCuentaOrigenComponent } from './select-cuenta-origen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { LoadingOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [ LoadingOutline ];


@NgModule({
	declarations: [SelectCuentaOrigenComponent],
	exports: [SelectCuentaOrigenComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		NzSelectModule,
		NzIconModule.forChild(icons),
	]
})
export class SelectCuentaOrigenModule { }
