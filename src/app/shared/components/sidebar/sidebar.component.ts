import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

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
			icon: 'user-add',
			label: 'Clientes',
			route: 'clientes'
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
			label: 'Blog',
			route: 'create-blog'
		},
		{
			icon: 'file',
			label: 'Documentos',
			route: 'documentos'
		},
		{
			icon: 'notification',
			label: 'Boletin',
			route: 'boletin'
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
			icon: 'menu',
			label: 'Cerrar menú',
			click: () => { this.toggleMenu() }
		},		
	]

	constructor(
		private router: Router,
		private localStorage: LocalStorageService,
	) { }

	ngOnInit(): void {
	}

	toggleMenu() {
		this.isOpen = !this.isOpen
		this.onToggleEmitter.emit(this.isOpen)
	}

	cerrarSesion() {
		this.localStorage.clear({ key: 'sesion' })
		this.router.navigate(['/']);
	}

	getProfilePicture() {
		let profile_pic= this.localStorage.getStorage({ key: 'preferences' })
		if (!profile_pic)
			profile_pic ="https://randomuser.me/api/portraits/men/40.jpg"

		return profile_pic
	}
}
