import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
	selector: 'app-checkout',
	templateUrl: './checkout.component.html',
	styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

	form: FormGroup

	constructor(
		private _messageService: NzMessageService
	) {
		this.form = new FormGroup({
			producto: new FormControl('1234567', [Validators.required]),
			numeroTarjeta: new FormControl(null, [Validators.required]),
			expiracionTarjeta: new FormControl(null, [Validators.required]),
			cvvTarjeta: new FormControl(null, [Validators.required]),
			titularTarjeta: new FormControl(null, [Validators.required]),
			subscripcion: new FormControl({disabled: true, value: 'Anual'}, [Validators.required]),
		})
	}

	ngOnInit(): void {
	}

	realizarPago() {
		if (this.form.invalid) {
			this.form.markAllAsTouched()
			this._messageService.error('Los campos marcados son obligatorios')
			return
		}
	}

}
