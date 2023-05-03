import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorResponse, MessageResponse, Response } from 'src/app/models/app/response';
import { VsFormGroup } from 'src/app/models/app/VsFormGroup';
import { FORMS_MAPPINGS } from 'src/app/shared/constants/forms.constants';
import { differenceInCalendarDays } from 'date-fns';
import { AutenticacionService } from 'src/app/shared/services/api/autenticacion/autenticacion.service';
import { finalize } from 'rxjs';
import { TokenComponentService } from 'src/app/modals/token/token.component.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CryptojsService } from 'src/app/shared/services/cryptojs/cryptojs.service';

@Component({
	selector: 'app-recuperar-clave',
	templateUrl: './recuperar-clave.component.html',
	styleUrls: ['./recuperar-clave.component.scss']
})
export class RecuperarClaveComponent {

	readonly env = environment;
	form: VsFormGroup
	formRecuperacion: VsFormGroup
	formsMappings = FORMS_MAPPINGS

	recuperacionSocio: boolean = true

	step: number = 1

	errors: MessageResponse[] | null = null
	isLoading: boolean = false

	disabledDate = (current: Date): boolean => differenceInCalendarDays(current, new Date()) > 0

	constructor(
		private _authService: AutenticacionService,
		private _crypto: CryptojsService,
		private _tokenModal: TokenComponentService,
		private _router: Router,
	) {
		this.form = new VsFormGroup({
			NumeroIdentificacion: new FormControl(null, [Validators.required]),
			Correo: new FormControl(null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
			NumeroIdentificacionSocio: new FormControl(null, [Validators.required]),
			FechaNacimiento: new FormControl(null, [Validators.required]),
			NumeroCuenta: new FormControl(null, [Validators.required, Validators.pattern('([0-9])+')]),
		})

		this.formRecuperacion = new VsFormGroup({
			Clave: new FormControl(null, [Validators.required]),
			RepClave: new FormControl(null, [Validators.required]),
			IdTransaccion: new FormControl(null, [Validators.required]),
		})
	}

	recuperar() {
		if (this.recuperacionSocio) {
			this.form.get('NumeroIdentificacionSocio')?.setValue(this.form.get('NumeroIdentificacion')?.value)
		}

		if (this.form.invalid) {
			this.form.markAllAsTouched()
			this.form.markAllAsDirty()
			return
		}

		this.isLoading = true
		this.errors = null

		const data = this.form.getRawValue()

		this._authService.solicitarRecupClave(data)
		.pipe(finalize(() => this.isLoading = false))
		.subscribe(api => {
			this.abrirModalToken(api, () => {
				this.formRecuperacion.get('IdTransaccion')?.setValue(api.idTransaccion)
				this.step = 2
			})
		}, (error: ErrorResponse) => {
			this.errors = error.messages
		})
	}

	reestablecerClave() {
		if (this.formRecuperacion.invalid) {
			this.formRecuperacion.markAllAsTouched()
			this.formRecuperacion.markAllAsDirty()
			return
		}

		this.isLoading = true
		this.errors = null

		const data = {
			...this.form.getRawValue(),
			...this.formRecuperacion.getRawValue()
		}

		this._authService.recuperarClave(data)
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

	abrirModalToken(resp: Response<any>, callback: any) {
		this._tokenModal.abrirModalToken(resp.idTransaccion)
		.subscribe(valido => {
			if (valido)
				callback()
		})
	}

}
