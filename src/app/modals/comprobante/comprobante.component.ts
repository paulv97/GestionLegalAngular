import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
	selector: 'app-comprobante',
	standalone: true,
	imports: [CommonModule, NzModalModule, NzButtonModule],
	templateUrl: './comprobante.component.html',
	styleUrls: ['./comprobante.component.scss']
})
export class ComprobanteComponent implements OnInit {

	@Input('data') data: {
		label: string,
		value: string,
		isFeatured: boolean
	}[] = []

	constructor() { }

	ngOnInit(): void {
	}

}
