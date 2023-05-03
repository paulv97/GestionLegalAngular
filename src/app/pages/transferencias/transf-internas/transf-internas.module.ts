import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfInternasComponent } from './transf-internas.component';
import { RouterModule } from '@angular/router';
import { SelectCuentaOrigenModule } from 'src/app/shared/components/select-cuenta-origen/select-cuenta-origen.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { SelectCuentaDestIntModule } from 'src/app/shared/components/select-cuenta-dest-int/select-cuenta-dest-int.module';
import { ComprobanteComponent } from 'src/app/modals/comprobante/comprobante.component';
import { SliderMarketingModule } from 'src/app/shared/components/slider-marketing/slider-marketing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [TransfInternasComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{path: '', component: TransfInternasComponent}]),
		FormsModule,
		ReactiveFormsModule,
		SelectCuentaOrigenModule,
		SelectCuentaDestIntModule,
		NzInputModule,
		NzButtonModule,
		NzInputNumberModule,
		NzModalModule,
		ComprobanteComponent,
		SliderMarketingModule,
	]
})
export class TransfInternasModule { }
