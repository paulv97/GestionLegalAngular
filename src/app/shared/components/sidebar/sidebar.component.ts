import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	animations: [
		trigger(
			'slide', [
				transition(':enter', [
					style({ transform: 'translateX(-100%)', opacity: 0 }),
					animate('170ms', style({ transform: 'translateX(0)', opacity: 1 }))
				]),
				transition(':leave', [
					style({ transform: 'translateX(0)', opacity: 1 }),
					animate('250ms', style({ transform: 'translateX(-100%)', opacity: 0 }))
				])
			],

		),
		trigger(
			'enter', [
				transition(':enter', [
					style({ opacity: 0 }),
					animate('100ms', style({ opacity: 1 }))
				]),
				transition(':leave', [
					style({ opacity: 1 }),
					animate('170ms', style({ opacity: 0 }))
				])
			]
		),
		trigger('menuOpen', [
			state('inactive', style({ height: '0px', minHeight: '0', display: 'none' })),
			state('active', style({ height: '*' })),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
		trigger(
			'inOutAnimation',[
				transition(
					':enter',
					[
						style({ height: 0, opacity: 0 }),
						animate('0.2s ease-out',
							style({ height: 250, opacity: 1 }))
					]
				),
				transition(
					':leave',
					[
						style({ height: 250, opacity: 1 }),
						animate('0.2s ease-in',
							style({ height: 0, opacity: 0 }))
					]
				)
			]
		),
    ]
})
export class SidebarComponent {

	@Input('type') type: "overlay" | "static" = "static";
	@Input('width') width = "24rem";
	@Input('animated') animated = true;

	constructor() { }

	// Variable para mostrar u ocultar el menú
	private _showMenu = true;
	// Evento que actualiza el parametro showMenu
	@Output('showMenuChange') showEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

	// Setter: valida que el tipo de menu sea como capa para mostrar u ocultar
    @Input('showMenu') set showMenu(value: boolean) {
		if(this.type == 'overlay') this._showMenu = value
		else this._showMenu = true
    }

	// Devuelve el valor de la variable
    get showMenu(): boolean { return this._showMenu }

	cerrarMenu(): void {
		this.showMenu = false;
		this.showEmitter.emit(this.showMenu)
	}

	itemClick() {
		if (this.type == 'overlay')
			this.cerrarMenu()
	}

}
