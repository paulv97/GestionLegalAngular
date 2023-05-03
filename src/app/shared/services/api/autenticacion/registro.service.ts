import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/models/app/response';
import { RegistroRequest } from 'src/app/models/autenticacion/registro';

@Injectable({
	providedIn: 'root'
})
export class RegistroService {

	constructor(
		private _http: HttpClient,
	) { }

	crearUsuario(data: RegistroRequest) {
		return this._http.post<Response<void>>(`registro`, data)
	}

	completar(data: any) {
		return this._http.post<Response<void>>(`registro/completar`, data)
	}

}
