import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-busqueda',
	templateUrl: './busqueda.component.html',
	styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

	busqueda: string = ''
	fecha = new Date()

	public readonly CASOS = [
		{
			nombre: 'Calle Aracely',
			razon: '...',
			fecha: new Date(),
			providencia: Math.floor(Date.now() / 1000)
		},
		{
			nombre: 'Paul Balarezo',
			razon: '...',
			fecha: new Date(),
			providencia: Math.floor(Date.now() / 1000)
		},
		{
			nombre: 'Juan Cardenas',
			razon: '...',
			fecha: new Date(),
			providencia: Math.floor(Date.now() / 1000)
		},
		{
			nombre: 'Paul Villalta',
			razon: '...',
			fecha: new Date(),
			providencia: Math.floor(Date.now() / 1000)
		},
	]

	constructor() { }

	ngOnInit(): void {
	}

}
