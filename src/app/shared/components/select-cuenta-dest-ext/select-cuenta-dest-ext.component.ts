import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'vs-select-cuenta-dest-ext',
	templateUrl: './select-cuenta-dest-ext.component.html',
	styleUrls: ['./select-cuenta-dest-ext.component.scss']
})
export class SelectCuentaDestExtComponent implements OnInit {

	@Input('containerClass') containerClass: string = 'cursor-pointer hover:scale w-full bg-white rounded-sm border-solid border-1 color-input-border px-12 py-7'
	@Input('placeholder') placeholder: string = 'Seleccione una cuenta de destino'

	cuentaOrigen: string | null = 'null'

	constructor() { }

	ngOnInit(): void {
	}

	seleccionarCuentaOrigen() {
		this.cuentaOrigen = this.cuentaOrigen ? null : 'null'
	}

}
