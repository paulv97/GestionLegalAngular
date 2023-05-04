import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NuevoJuicioComponent } from './nuevo-juicio/nuevo-juicio.component';

@Component({
	selector: 'app-busqueda',
	templateUrl: './busqueda.component.html',
	styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

	busqueda: string = ''
	fecha = new Date()

	CASOS = [
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

	constructor(
		private _modalService: NzModalService,
	) { }

	ngOnInit(): void {
	}

	abrirModalNuevoJuicio() {
		const modal = this._modalService.create({
			nzContent: NuevoJuicioComponent,
			nzFooter: null,
		})

		modal.afterClose.subscribe(data => {
			if (!data) return

			this.CASOS = [data, ...this.CASOS]
		})
	}

}
