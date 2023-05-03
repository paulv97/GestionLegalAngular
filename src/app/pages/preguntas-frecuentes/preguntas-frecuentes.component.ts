import { Component, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/shared/animations/animations';

@Component({
	selector: 'app-preguntas-frecuentes',
	templateUrl: './preguntas-frecuentes.component.html',
	styleUrls: ['./preguntas-frecuentes.component.scss'],
	animations: [
		fadeInOut
	]
})
export class PreguntasFrecuentesComponent implements OnInit {

	busqueda: string = ''

	constructor() { }

	ngOnInit(): void {
	}

}
