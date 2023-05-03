import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/models/app/response';

@Injectable({
	providedIn: 'root'
})
export class TokenService {

	constructor(
		private _http: HttpClient,
	) { }

	autorizarTransaccion(guid: string, token: string) {
		return this._http.post<Response<void>>(`tokens/autorizar`, {
			guid: guid,
			codigoToken: token
		})
	}

	generarTransaccion() {
		return this._http.post<Response<string>>(`tokens/generar`, {})
	}

}
