import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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
			icon: 'apartment',
			label: 'Juicios',
			route: 'busqueda'
		},
		{
			icon: 'book',
			label: 'Recursos',
			route: 'recursos'
		},
		{
			icon: 'pie-chart',
			label: 'Estadísticas',
			route: 'estadisticas'
		},
		{
			icon: 'file-text',
			label: 'blog',
			route: 'create-blog'
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
			click: () => { this.cerrarSesion() }
		},
		{
			icon: 'info-circle',
			label: 'Autor: Paul Villalta',
			click: () => { }
		},
		{
			icon: 'menu',
			label: 'Cerrar menú',
			click: () => { this.toggleMenu() }
		},		
	]

	constructor(
		private router: Router,
	) { }

	ngOnInit(): void {
	}

	toggleMenu() {
		this.isOpen = !this.isOpen
		this.onToggleEmitter.emit(this.isOpen)
	}

	cerrarSesion() {
		this.router.navigate(['/']);
	}
}
