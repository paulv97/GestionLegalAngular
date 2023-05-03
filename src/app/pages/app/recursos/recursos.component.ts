import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-recursos',
	templateUrl: './recursos.component.html',
	styleUrls: ['./recursos.component.scss']
})
export class RecursosComponent implements OnInit {

	busqueda: string = ''

	public readonly RECURSOS = [
		'Reglamento General a la Ley Orgánica de Telecomunicaciones',
		'Normativa SEPS Actualización a 2023',
		'Normativa Central de Bancos - Actualización a 2023',
		'Reglamento General a la Ley Orgánica de Telecomunicaciones',
		'Normativa SEPS Actualización a 2023',
		'Normativa Central de Bancos - Actualización a 2023',
	]

	constructor() { }

	ngOnInit(): void {
	}

}
