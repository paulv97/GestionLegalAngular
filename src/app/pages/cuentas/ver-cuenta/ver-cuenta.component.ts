import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { ErrorResponse, MessageResponse } from 'src/app/models/app/response';
import { fadeInOut } from 'src/app/shared/animations/animations';
import { groupBy } from 'src/app/shared/helpers/group';
import { CuentaService } from 'src/app/shared/services/api/cuentas/cuenta.service';

@Component({
	selector: 'app-ver-cuenta',
	templateUrl: './ver-cuenta.component.html',
	styleUrls: ['./ver-cuenta.component.scss'],
	animations: [fadeInOut]
})
export class VerCuentaComponent implements OnInit {

	movimientos: any[] | null = null
	fechas: Date[]
	numeroCuenta: string
	alias: string

	error: MessageResponse[] | null = null
	loading = {
		movimientos: true,
		infoCuenta: true
	}

	constructor(
		private _cuentaService: CuentaService,
		private route: ActivatedRoute,
		private _datePipe: DatePipe,
	) {
		this.numeroCuenta = this.route.snapshot.paramMap.get('numeroCuenta') || ''
		this.alias = this.route.snapshot.queryParamMap.get('alias') || this.numeroCuenta

		this.fechas = [new Date().addDays(-60), new Date()]
	}

	ngOnInit(): void {
		this.obtenerMovimientos()
	}

	obtenerMovimientos() {
		this.loading.movimientos = true
		this.error = null
		this.movimientos = null

		this._cuentaService.obtenerMovimeintos({
			numeroCuenta: this.numeroCuenta,
			fechaInicio: this.fechas[0],
			fechaFin: this.fechas[1],
		})
		.pipe(finalize(() => this.loading.movimientos = false))
		.subscribe(api => {
			api.data.forEach(v => {
				v.fechaTransaccion = this._datePipe.transform(v.fechaTransaccion, 'MMMM dd')
			})
			this.movimientos = groupBy(api.data, 'fechaTransaccion')
		}, (error: ErrorResponse) => this.error = error.messages)
	}

}
