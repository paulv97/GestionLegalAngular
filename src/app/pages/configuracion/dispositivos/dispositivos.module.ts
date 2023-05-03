import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispositivosComponent } from './dispositivos.component';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { IconDefinition } from '@ant-design/icons-angular';
import { LogoutOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [
	LogoutOutline,
]

@NgModule({
	declarations: [DispositivosComponent],
	imports: [
		CommonModule,
		RouterModule.forChild([{path: '', component: DispositivosComponent}]),
		NzButtonModule,
		NzIconModule.forChild(icons),
		NzToolTipModule,
	]
})
export class DispositivosModule { }
