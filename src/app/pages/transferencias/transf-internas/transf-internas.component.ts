import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ComprobanteComponent } from 'src/app/modals/comprobante/comprobante.component';
import { TokenComponent } from 'src/app/modals/token/token.component';
import { TokenComponentService } from 'src/app/modals/token/token.component.service';
import { VsFormGroup } from 'src/app/models/app/VsFormGroup';
import { TokenService } from 'src/app/shared/services/api/autenticacion/token.service';
import { TransaccionService } from 'src/app/shared/services/api/transacciones/transaccion.service';

@Component({
	selector: 'app-transf-internas',
	templateUrl: './transf-internas.component.html',
	styleUrls: ['./transf-internas.component.scss']
})
export class TransfInternasComponent implements OnInit {

	form: VsFormGroup

	constructor(
		private _modal: NzModalService,
		private _tokenService: TokenService,
		private _tokenModal: TokenComponentService,
		private _transaccionService: TransaccionService,
	) {
		this.form = new VsFormGroup({
			cuentaOrigen: new FormControl(null, [Validators.required]),
			cuentaDestino: new FormControl(null, [Validators.required]),
			valor: new FormControl(null, [Validators.required, Validators.min(0)]),
			observaciones: new FormControl(null, []),
		})
	}

	ngOnInit(): void {
	}

	realizarTransferencia() {
		// if (this.form.invalid) {
		// 	this.form.markAllAsDirty()
		// 	return
		// }

		const formData = this.form.getRawValue()

		const transferencia: any = {
			codigoProductoOrigen: formData.cuentaOrigen.codigoProducto,
			numeroCuentaOrigen: formData.cuentaOrigen.numeroCuenta,
			valor: formData.valor,
			codigoProductoDestino: 1,
			numeroCuentaDestino: '2908',
			observaciones: formData.observaciones,
		}

		this._tokenService.generarTransaccion()
		.subscribe(api => {
			transferencia.idTransaccion = api.data

			this._tokenModal.abrirModalToken(api.data)
			.subscribe(valido => {
				if (valido) {
					this._transaccionService.realizarTransferenciaInterna(transferencia)
					.subscribe(api => {
						this._modal.create({
							nzContent: ComprobanteComponent,
							nzComponentParams: {
								data: [
									{
										label: 'Valor',
										value: transferencia.valor,
										isFeatured: true
									},
									{
										label: 'Observaciones',
										value: transferencia.observaciones,
										isFeatured: false
									},
								]
							},
							nzClosable: false,
							nzFooter: null,
							nzClassName: 'modal-comprobante'
						})
					})
				} else {
					this.setearDefecto()
				}
			})
		})
	}

	setearDefecto() {
		this.form.reset()
	}

	pruebas() {
		const m = this._modal.create({
			nzContent: TokenComponent,
			nzClosable: false,
			nzFooter: null,
			nzClassName: 'modal-no-spacing'
		})

		m.afterClose.subscribe(() => {
			this._modal.create({
				nzContent: ComprobanteComponent,
				nzClosable: false,
				nzFooter: null,
				nzClassName: 'modal-comprobante'
			})
		})
	}

}
