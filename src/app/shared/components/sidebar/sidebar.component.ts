import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	@Input('toggle') isOpen = false
	@Output('toggleChange') onToggleEmitter = new EventEmitter<boolean>()

	public readonly MENU = [
		{
			icon: 'search',
			label: 'Buscar',
			route: 'busqueda'
		},
		{
			icon: 'apartment',
			label: 'Juicios',
			route: ''
		},
		{
			icon: 'book',
			label: 'Recursos',
			route: 'recursos'
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
			click: () => { this.toggleMenu() }
		},
	]

	constructor() { }

	ngOnInit(): void {
	}

	toggleMenu() {
		this.isOpen = !this.isOpen
		this.onToggleEmitter.emit(this.isOpen)
	}
}
