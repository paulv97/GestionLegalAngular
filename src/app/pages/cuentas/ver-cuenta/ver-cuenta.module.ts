import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { VerCuentaComponent } from './ver-cuenta.component';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { IconDefinition } from '@ant-design/icons-angular';
import { SearchOutline, FilePdfOutline, SelectOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

const icons: IconDefinition[] = [
	SearchOutline,
	FilePdfOutline,
	SelectOutline
]

@NgModule({
	declarations: [VerCuentaComponent],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([{path: '', component: VerCuentaComponent}]),
		NzButtonModule,
		NzDatePickerModule,
		NzIconModule.forChild(icons),
		NzEmptyModule,
	],
	providers: [DatePipe]
})
export class VerCuentaModule { }
