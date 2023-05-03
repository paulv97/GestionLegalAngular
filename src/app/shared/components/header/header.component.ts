import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AutenticacionService } from '../../services/api/autenticacion/autenticacion.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

	@Input('showMenuButton') showMenuButton: boolean = false

	@Input('showMenu') showMenu: boolean = false
	@Output('showMenuChange') menuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()

	constructor(
		private _authService: AutenticacionService,
	) { }

	ngOnInit(): void {
	}

	cerrarSesion() {
		this._authService.cerrarSesion()
	}

	toggleMenu() {
		if (!this.showMenuButton) {
			this.menuEmitter.emit(true)
			return
		}

		this.showMenu = !this.showMenu
		this.menuEmitter.emit(this.showMenu)
	}

}
