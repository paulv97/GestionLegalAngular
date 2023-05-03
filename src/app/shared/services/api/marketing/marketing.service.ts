import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from 'src/app/models/app/response';
import { RecursoGrafico } from 'src/app/models/marketing/marketing';

@Injectable({
	providedIn: 'root'
})
export class MarketingService {

	constructor(
		private _http: HttpClient
	) { }

	obtenerRecursos(codigoCategoria: number) {
		return this._http.get<Response<RecursoGrafico[]>>(`marketing/${codigoCategoria}`);
	}

}
