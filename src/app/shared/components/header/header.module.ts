import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { NotificationOutline } from '@ant-design/icons-angular/icons';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NotificationsModule } from '../notifications/notifications.module';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

const icons: IconDefinition[] = [
	NotificationOutline,
]

@NgModule({
	declarations: [HeaderComponent],
	exports: [HeaderComponent],
	imports: [
		CommonModule,
		NzButtonModule,
		NzIconModule.forChild(icons),
		NzToolTipModule,
		NotificationsModule,
		NzPopoverModule,
	]
})
export class HeaderModule { }
