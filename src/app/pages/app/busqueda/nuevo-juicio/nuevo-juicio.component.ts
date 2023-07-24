import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { finalize } from 'rxjs';
import { ClientesService } from 'src/app/shared/services/clientes/clientes.service';

@Component({
	selector: 'app-nuevo-juicio',
	templateUrl: './nuevo-juicio.component.html',
	styleUrls: ['./nuevo-juicio.component.scss']
})
export class NuevoJuicioComponent implements OnInit {

	form: FormGroup
	clientes: any[] = []

	constructor(
		private _modalRef: NzModalRef,
		private _messageService: NzMessageService,
		private clientesService: ClientesService,
		private router: Router,
	) {
		this.form = new FormGroup({
			idCliente: new FormControl(null, [Validators.required]),
			razon: new FormControl(null, [Validators.required]),
			codigoDependencia: new FormControl(null, [Validators.required]),
			anio: new FormControl(null, [Validators.required]),
			fecha: new FormControl(new Date(), [Validators.required]),
			providencia: new FormControl(null, [Validators.required]),
			contacto: new FormControl(null, [Validators.required]),
		})
	}

	ngOnInit(): void {
		this.buscarClientes("")
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

	onSearchSelect(event: any) {
		console.log('El evento', event)
	}

	guardarJuicio() {
		if (this.form.invalid) {
			this.form.markAllAsTouched()
			return
		}

		this._messageService.success('Juicio agregado exitosamente')
		this._modalRef.close(this.form.getRawValue())
	}

}
