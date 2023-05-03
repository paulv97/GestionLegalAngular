import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { ErrorResponse, MessageResponse } from 'src/app/models/app/response';
import { fadeInOut } from 'src/app/shared/animations/animations';
import { GarantiaService } from 'src/app/shared/services/api/garantias/garantia.service';

@Component({
	selector: 'app-listado-garantias',
	templateUrl: './listado-garantias.component.html',
	styleUrls: ['./listado-garantias.component.scss'],
	animations: [fadeInOut]
})
export class ListadoGarantiasComponent implements OnInit {

	garantias: any[] = []

	isLoading: boolean = true

	error: MessageResponse[] | null = []

	constructor(
		private _garantiaService: GarantiaService,
	) { }

	ngOnInit(): void {
		this.obtenerGarantias()
	}

	obtenerGarantias() {
		this.isLoading = true
		this.error = null

		this._garantiaService.obtenerGarantias()
		.pipe(finalize(() => this.isLoading = false))
		.subscribe(api => {
			this.garantias = api.data
		}, (err: ErrorResponse) => this.error = err.messages)
	}

}
