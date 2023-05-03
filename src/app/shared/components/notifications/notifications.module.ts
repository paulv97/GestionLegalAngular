import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [NotificationsComponent],
	exports: [NotificationsComponent],
	imports: [
		CommonModule,
		RouterModule,
	]
})
export class NotificationsModule { }
