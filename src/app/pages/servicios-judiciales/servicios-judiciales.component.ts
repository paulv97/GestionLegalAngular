import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servicios-judiciales',
	templateUrl: './servicios-judiciales.component.html',
	styleUrls: ['./servicios-judiciales.component.scss']
})
export class ServiciosJudicialesComponent implements OnInit {

	busqueda: string = ''

	constructor() { }

	ngOnInit(): void {
	}

}
