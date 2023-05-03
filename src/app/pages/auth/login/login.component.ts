import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { TokenComponentService } from 'src/app/modals/token/token.component.service';
import { ErrorResponse, MessageResponse, Response } from 'src/app/models/app/response';
import { AutenticacionService } from 'src/app/shared/services/api/autenticacion/autenticacion.service';
import { CryptojsService } from 'src/app/shared/services/cryptojs/cryptojs.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	formCrendeciales: FormGroup
	formLogin: FormGroup
	socios: any[] | null = null
	errors: MessageResponse[] | null = null
	mensajes: MessageResponse[] | null = null
	isLoading: boolean = false

	constructor(
		private _authService: AutenticacionService,
		private _tokenModal: TokenComponentService,
		private _crypto: CryptojsService,
		private _route: ActivatedRoute,
		private _router: Router,
		private _storage: LocalStorageService,
	) {
		this.formCrendeciales = new FormGroup({
			usuario: new FormControl(null, [Validators.required]),
			clave: new FormControl(null, [Validators.required]),
		})

		this.formLogin = new FormGroup({
			usuario: new FormControl(null, [Validators.required]),
			clave: new FormControl(null, [Validators.required]),
			idTransaccion: new FormControl(null, [Validators.required]),
			codigoSocio: new FormControl(null, [Validators.required]),
		})

		this.obtenerMensajesParams()
	}

	ngOnInit(): void {
	}

	obtenerMensajesParams() {
		this._route.queryParams
		.subscribe((params: any) => {
			if (!params.response) return

			try {
				const data = params.response
				this.mensajes = JSON.parse(this._crypto.desencriptar(data))
			} catch {}

			this._router.navigate([], {
				queryParams: {response: null},
				queryParamsHandling: 'merge'
			})
		})
  	}

	validarIdentidad() {
		if (this.formCrendeciales.invalid) {
			this.errors = [{code: '-1', text: 'Debe ingresar un usuario y contraseña para continuar'}]
			this.formCrendeciales.markAllAsTouched()
			return
		}

		this.isLoading = true
		this.errors = null
		this.mensajes = null
		const credeciales = this.formCrendeciales.getRawValue()
		credeciales.usuario = this._crypto.encriptar(credeciales.usuario)
		credeciales.clave = this._crypto.encriptar(credeciales.clave)

		this._authService.obtenerSociosPorCredenciales(credeciales)
		.pipe(finalize(() => this.isLoading = false))
		.subscribe(api => {
			this.formLogin.get('idTransaccion')?.setValue(api.idTransaccion)
			this.formLogin.get('usuario')?.setValue(credeciales.usuario)
			this.formLogin.get('clave')?.setValue(credeciales.clave)

			this.abrirModalToken(api)
		}, (error: ErrorResponse) => {
			this.errors = error.messages
		})
	}

	abrirModalToken(resp: Response<any>) {
		this._tokenModal.abrirModalToken(resp.idTransaccion)
		.subscribe(valido => {
			if (valido) {
				if (resp.data.length > 1) {
					this.socios = resp.data
					return
				}

				if (resp.data.length == 1) {
					this.seleccionarCuenta(resp.data[0].codigo)
				}
			} else {
				this.setearDefecto()
			}
		})
	}

	seleccionarCuenta(codigo: number) {
		if (this.isLoading) return

		this.formLogin.get('codigoSocio')?.setValue(codigo)

		// AQUI INICIAR SESION
		const data = this.formLogin.getRawValue()
		this.isLoading = true

		this._authService.iniciarSesion(data)
		.pipe(finalize(() => this.isLoading = false))
		.subscribe(api => {
			this._storage.setStorage({key: 'sesion'}, {
				token: api.data
			})

			this._router.navigate(['inicio'])
		}, (err: ErrorResponse) => {
			this.errors = err.messages
		})
	}

	setearDefecto() {
		this.formCrendeciales.reset()
		this.formLogin.reset()
		this.socios = null
		this.errors = null
		this.mensajes = null
		this.isLoading = false
	}

}
