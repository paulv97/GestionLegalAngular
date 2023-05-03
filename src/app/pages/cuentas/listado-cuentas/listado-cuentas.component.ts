import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { ErrorResponse, MessageResponse } from 'src/app/models/app/response';
import { fadeInOut } from 'src/app/shared/animations/animations';
import { groupBy } from 'src/app/shared/helpers/group';
import { CuentaService } from 'src/app/shared/services/api/cuentas/cuenta.service';

@Component({
	selector: 'app-listado-cuentas',
	templateUrl: './listado-cuentas.component.html',
	styleUrls: ['./listado-cuentas.component.scss'],
	animations: [fadeInOut]
})
export class ListadoCuentasComponent implements OnInit {

	cuentas: any[] = []

	isLoading: boolean = true

	error: MessageResponse[] | null = []

	constructor(
		private _cuentaService: CuentaService,
	) { }

	ngOnInit(): void {
		this.obtenerCuentas()
	}

	obtenerCuentas() {
		this.isLoading = true
		this.error = null

		this._cuentaService.obtenerCuentas()
		.pipe(finalize(() => this.isLoading = false))
		.subscribe(api => {
			this.cuentas = groupBy(api.data, 'descripcion')
		}, (err: ErrorResponse) => this.error = err.messages)
	}

	aperturarCuenta() {

	}


}
