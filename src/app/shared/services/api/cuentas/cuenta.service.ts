import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/models/app/response';

@Injectable({
	providedIn: 'root'
})
export class CuentaService {

	constructor(
		private _http: HttpClient
	) { }

	obtenerCuentas() {
		return this._http.get<Response<any[]>>('productos/cuentas')
	}

	obtenerMovimeintos(request: {
		numeroCuenta: string,
		fechaInicio: string | Date,
		fechaFin: string | Date
	}) {
		return this._http.post<Response<any[]>>(`productos/cuentas/${request.numeroCuenta}/movimientos`, request)
	}

}
