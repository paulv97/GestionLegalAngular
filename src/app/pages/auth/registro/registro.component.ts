import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { differenceInCalendarDays } from 'date-fns';
import { FORMS_MAPPINGS } from 'src/app/shared/constants/forms.constants';
import { ErrorResponse, Response } from 'src/app/models/app/response';
import { VsFormGroup } from 'src/app/models/app/VsFormGroup';
import { MessageResponse } from 'src/app/models/app/response';
import { TokenComponentService } from 'src/app/modals/token/token.component.service';
import { RegistroService } from 'src/app/shared/services/api/autenticacion/registro.service';
import { finalize } from 'rxjs';
import { RegistroRequest } from 'src/app/models/autenticacion/registro';
import { CryptojsService } from 'src/app/shared/services/cryptojs/cryptojs.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

	readonly env = environment;
	form: VsFormGroup
	formsMappings = FORMS_MAPPINGS

	errors: MessageResponse[] | null = null
	isLoading: boolean = false

	disabledDate = (current: Date): boolean => differenceInCalendarDays(current, new Date()) > 0

	constructor(
		private _tokenModal: TokenComponentService,
		private _registroService: RegistroService,
		private _crypto: CryptojsService,
		private _router: Router,
	) {
		this.form = new VsFormGroup({
			Usuario: new FormControl(null, [Validators.required, Validators.pattern('([a-zA-Z0-9]+){5,}')]),
			Clave: new FormControl(null, [Validators.required]),
			RepClave: new FormControl(null, [Validators.required]),
			Pin: new FormControl(null, [Validators.required, Validators.pattern('[0-9]{4,4}')]),
			NumeroIdentificacion: new FormControl(null, [Validators.required]),
			FechaNacimiento: new FormControl(null, [Validators.required]),
			NumeroCuenta: new FormControl(null, [Validators.required, Validators.pattern('([0-9])+')]),
		})
	}

	ngOnInit(): void {
	}

	registrarse() {
		if (this.form.invalid) {
			this.form.markAllAsTouched()
			this.form.markAllAsDirty()
			return
		}

		this.isLoading = true
		this.errors = null

		const data: RegistroRequest = this.form.getRawValue()
		data.Usuario = this._crypto.encriptar(data.Usuario)
		data.Clave = this._crypto.encriptar(data.Clave)

		this._registroService.crearUsuario(data)
		.pipe(finalize(() => this.isLoading = false))
		.subscribe(api => {
			this.abrirModalToken(api)
		}, (error: ErrorResponse) => {
			this.errors = error.messages
		})
	}

	abrirModalToken(resp: Response<any>) {
		this._tokenModal.abrirModalToken(resp.idTransaccion)
		.subscribe(valido => {
			if (valido) {
				this.completarRegistro(resp.idTransaccion)
			}
		})
	}

	completarRegistro(idTransaccion: string) {
		const data = {
			IdTransaccion: idTransaccion,
			Usuario: this._crypto.encriptar(this.form.get('Usuario')?.value)
		}

		this.isLoading = true
		this.errors = null

		this._registroService.completar(data)
		.pipe(finalize(() => this.isLoading = false))
		.subscribe(api => {
			const mensajes = this._crypto.encriptar(JSON.stringify(api.messages))
			this._router.navigate(['login'], {
				queryParams: {
					response: mensajes
				}
			})
		}, (error: ErrorResponse) => {
			this.errors = error.messages
		})
	}

}
