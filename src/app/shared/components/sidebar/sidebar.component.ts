import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	isOpen = false

	public readonly MENU = [
		{
			icon: 'search',
			label: 'Buscar',
			route: ''
		},
		{
			icon: 'apartment',
			label: 'Juicios',
			route: ''
		},
		{
			icon: 'book',
			label: 'Recursos',
			route: ''
		},
		{
			icon: 'pie-chart',
			label: 'Estadísticas',
			route: ''
		},
		{
			icon: 'setting',
			label: 'Configuración',
			route: ''
		},
	]


	public readonly BOTTOM = [
		{
			icon: 'question-circle',
			label: 'Ayuda',
			click: () => { }
		},
		{
			icon: 'logout',
			label: 'Salir',
			click: () => { }
		},
		{
			icon: 'menu',
			label: 'Cerrar menú',
			click: () => { this.isOpen = !this.isOpen }
		},
	]

	constructor() { }

	ngOnInit(): void {
	}

}
