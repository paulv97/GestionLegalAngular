import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/app/models/app/response';
import { LocalStorageService } from '../../local-storage/local-storage.service';

@Injectable({
	providedIn: 'root'
})
export class AutenticacionService {

	constructor(
		private _http: HttpClient,
		private _storage: LocalStorageService,
		private _router: Router,
	) { }

	obtenerSociosPorCredenciales(credenciales: {
		usuario: string,
		clave: string
	}) {
		return this._http.post<Response<any>>('autenticacion/validaciones/identidad', credenciales)
	}

	iniciarSesion(data: any) {
		return this._http.post<Response<string>>('autenticacion/iniciar-sesion', data)
	}

	cerrarSesion() {
		this._storage.clear({key: 'sesion'})
		this._router.navigate(['login'])
	}

	solicitarRecupClave(data: any) {
		return this._http.post<Response<void>>('autenticacion/recuperacion/clave/solicitud', data)
	}

	recuperarClave(data: any) {
		return this._http.post<Response<void>>('autenticacion/recuperacion/clave', data)
	}

	recuperarUsuario(data: any) {
		return this._http.post<Response<void>>('autenticacion/recuperacion/usuario', data)
	}

}
