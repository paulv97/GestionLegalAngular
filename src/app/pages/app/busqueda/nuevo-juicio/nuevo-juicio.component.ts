import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
	selector: 'app-nuevo-juicio',
	templateUrl: './nuevo-juicio.component.html',
	styleUrls: ['./nuevo-juicio.component.scss']
})
export class NuevoJuicioComponent implements OnInit {

	form: FormGroup

	constructor(
		private _modalRef: NzModalRef,
		private _messageService: NzMessageService,
	) {
		this.form = new FormGroup({
			nombre: new FormControl(null, [Validators.required]),
			razon: new FormControl(null, [Validators.required]),
			codigoDependencia: new FormControl(null, [Validators.required]),
			anio: new FormControl(null, [Validators.required]),
			fecha: new FormControl(new Date(), [Validators.required]),
			providencia: new FormControl(null, [Validators.required]),
			contacto: new FormControl(null, [Validators.required]),
		})
	}

	ngOnInit(): void {
	}

	cerrarModal() {
		this._modalRef.close(false)
	}

	guardarJuicio() {
		if (this.form.invalid) {
			this.form.markAllAsTouched()
			return
		}

		this._messageService.success('Juicio agregado exitosamente')
		this._modalRef.close(this.form.getRawValue())
	}

}
