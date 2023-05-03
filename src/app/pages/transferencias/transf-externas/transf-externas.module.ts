import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfExternasComponent } from './transf-externas.component';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { SelectCuentaOrigenModule } from 'src/app/shared/components/select-cuenta-origen/select-cuenta-origen.module';
import { SelectCuentaDestExtModule } from 'src/app/shared/components/select-cuenta-dest-ext/select-cuenta-dest-ext.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SliderMarketingModule } from 'src/app/shared/components/slider-marketing/slider-marketing.module';

@NgModule({
	declarations: [TransfExternasComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{path: '', component: TransfExternasComponent}]),
		SelectCuentaOrigenModule,
		SelectCuentaDestExtModule,
		NzInputModule,
		NzButtonModule,
		SliderMarketingModule,
	]
})
export class TransfExternasModule { }
