import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { finalize } from 'rxjs';
import { ClientesService } from 'src/app/shared/services/clientes/clientes.service';
import { JuiciosService } from 'src/app/shared/services/juicios/juicios.service';

@Component({
	selector: 'app-nuevo-juicio',
	templateUrl: './nuevo-juicio.component.html',
	styleUrls: ['./nuevo-juicio.component.scss']
})
export class NuevoJuicioComponent implements OnInit {

	form: FormGroup
	clientes: any[] = []

	tiposJuicios: any[] = []
	estadosJuicios: any[] = []

	isLoadingGuardar: boolean = false

	constructor(
		private _modalRef: NzModalRef,
		private _messageService: NzMessageService,
		private clientesService: ClientesService,
		private juiciosService: JuiciosService,
		private router: Router,
	) {
		this.form = new FormGroup({
			idCliente: new FormControl(null, [Validators.required]),
			tipoJuicio: new FormControl(null, [Validators.required]),
			codigoDependencia: new FormControl(null, [Validators.required]),
			fechaInicio: new FormControl(null, [Validators.required]),
			fechaFin: new FormControl(null),
			numeroSecuencial: new FormControl(null, [Validators.required]),
			estado: new FormControl(null, [Validators.required]),
		})
	}

	ngOnInit(): void {
		this.buscarClientes("")
		this.tiposJuicios = this.juiciosService.obtenerTiposJuicios()
		this.estadosJuicios = this.juiciosService.obtenerEstados()
	}

	cerrarModal() {
		this._modalRef.close(false)
	}

	irAClientes() {
		this._modalRef.close(false)
		this.router.navigate(['/clientes'])
	}

	buscarClientes(filtro: any) {
		this.clientesService.obtenerClientesPorAbogado(filtro)
		.subscribe(
		  (clientes: any) => {
			console.log(clientes)
			this.clientes = clientes
		  },
		  (err) => {
			console.log(err)
			this._messageService.error(err.error.mensaje)
		  }
		)
	}

	guardarJuicio() {
		if (this.form.invalid) {
			this.form.markAllAsTouched()
			return
		}

		this.isLoadingGuardar = true
		const form = this.form.getRawValue()
		this.juiciosService.guardarJuicio(form)
		.pipe(finalize(() => this.isLoadingGuardar = false))
		.subscribe(
			(resp: any) => {
				this._messageService.success(resp.mensaje)
				this._modalRef.close(true)
			},
			(err) => {
				this._messageService.error(err?.mensaje ? err.mensaje : err)
			}
		)
	}

}
