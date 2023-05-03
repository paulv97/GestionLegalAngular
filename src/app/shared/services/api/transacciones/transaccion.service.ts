import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/models/app/response';

@Injectable({
	providedIn: 'root'
})
export class TransaccionService {

	constructor(
		private readonly _http: HttpClient,
	) { }

	obtenerCuentasOrigen() {
		return this._http.get<Response<any[]>>('transacciones/cuentas-origen')
	}

	realizarTransferenciaInterna(data: any) {
		return this._http.post<Response<void>>('transacciones/transferencias/internas', data)
	}

}
