import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/models/app/response';

@Injectable({
	providedIn: 'root'
})
export class GarantiaService {

	constructor(
		private _http: HttpClient,
	) { }

	obtenerGarantias() {
		return this._http.get<Response<any>>(`productos/garantias`)
	}

}
