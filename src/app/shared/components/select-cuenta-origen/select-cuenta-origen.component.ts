import { AfterViewInit, Component, forwardRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { finalize } from 'rxjs';
import { ErrorResponse, MessageResponse } from 'src/app/models/app/response';
import { fadeInOut } from '../../animations/animations';
import { TransaccionService } from '../../services/api/transacciones/transaccion.service';
import { CommonSelect } from '../classes/common-select';

@Component({
	selector: 'vs-select-cuenta-origen',
	templateUrl: './select-cuenta-origen.component.html',
	styleUrls: ['./select-cuenta-origen.component.scss'],
	encapsulation: ViewEncapsulation.None,
	animations: [fadeInOut],
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		multi: true,
		useExisting: forwardRef(() => SelectCuentaOrigenComponent)
	}]
})
export class SelectCuentaOrigenComponent extends CommonSelect<any> implements AfterViewInit {

	@Input('containerClass') containerClass: string = 'border-solid border-1 color-input-border'
	@Input('requiredAmount') requiredAmount: number = -1

	cuentaOrigen: string | null = 'null'
	cuentasOrigen: any[] | null = null

	isLoading: boolean = true
	errors: MessageResponse[] | null = null

	constructor(
		private _transaccionService: TransaccionService,
	) {
		super()
	}

	ngAfterViewInit(): void {
		this.listarCuentasOrigen()
	}

	seleccionarCuentaOrigen() {
		this.cuentaOrigen = this.cuentaOrigen ? null : 'null'
	}

	listarCuentasOrigen() {
		this.isLoading = true
		this.cuentasOrigen = null
		this.errors = null

		this._transaccionService.obtenerCuentasOrigen()
		.pipe(finalize(() => this.isLoading = false))
		.subscribe(api => {
			this.cuentasOrigen = api.data

			if (this.cuentasOrigen?.length > 0) {
				this.value = this.cuentasOrigen[0]
				this.change(this.cuentasOrigen[0])
			}
		}, (error: ErrorResponse) => {
			this.errors = error.messages
		})
	}

}
