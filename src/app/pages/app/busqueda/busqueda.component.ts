import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NuevoJuicioComponent } from './nuevo-juicio/nuevo-juicio.component';
import { JuiciosService } from 'src/app/shared/services/juicios/juicios.service';
import { finalize } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { JudicaturaComponent } from './judicatura/judicatura.component';

@Component({
	selector: 'app-busqueda',
	templateUrl: './busqueda.component.html',
	styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

	busqueda: string = ''
	fecha = new Date()

	juicios: any[] = []

	isLoadingEliminarJuicio: boolean = false

	constructor(
		private _modalService: NzModalService,
		private juiciosService: JuiciosService,
		private message: NzMessageService,
	) { }

	ngOnInit(): void {
		this.buscarJuicios("")
	}

	abrirModalNuevoJuicio(data: any = null) {
		console.log('Juicio', data)

		const modal = this._modalService.create({
			nzContent: NuevoJuicioComponent,
			nzFooter: null,
			nzComponentParams: {
				data: data
			}
		})

		modal.afterClose.subscribe(data => {
			if (!data) return

			this.buscarJuicios("")
		})
	}

	buscarJuicios(filtro: any) {
		this.juiciosService.obtenerJuiciosPorAbogado(filtro)
		.pipe(finalize(() => console.log('juicio cargado')))
		.subscribe(
		  (juicios: any) => {
			console.log(juicios)
			this.juicios = juicios
		  },
		  (err) => {
			console.log(err)
			this.message.error(err.error.mensaje)
		  }
		)
	  }

	eliminarJuicio(j: any) {
		this.isLoadingEliminarJuicio = true
		this.juiciosService.eliminarJuicio(j?.idjuicio)
		.pipe(finalize(() => this.isLoadingEliminarJuicio = false))
		.subscribe(
			(resp: any) => {
			  console.log(resp)
			  this.buscarJuicios("")
			},
			(err) => {
			  console.log(err)
			  this.message.error(err.error.mensaje)
			}
		  )
	}

	abrirJudicatura(juicio: any) {
		const modal = this._modalService.create({
			nzContent: JudicaturaComponent,
			nzFooter: null,
			nzWidth: 1000,
			nzComponentParams: {
				codigoDependencia: juicio?.codigodependencia,
				anio: juicio?.anio,
				nroSecuencial: juicio?.numerosecuencial
			}
		})
	}

}
