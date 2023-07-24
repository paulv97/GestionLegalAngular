import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss']
})
export class NuevoClienteComponent implements OnInit {

  form: FormGroup

  tiposIdentificacion = [
    { codigo: 'C', descripcion: 'CEDULA' },
    { codigo: 'P', descripcion: 'PASAPORTE' },
    { codigo: 'R', descripcion: 'RUC' }
  ]

  generos = [
    { codigo: 'M', descripcion: 'MASCULINO' },
    { codigo: 'F', descripcion: 'FEMENINO' },
    { codigo: null, descripcion: 'NO APLICA' },
  ]

  tiposPersona = [
    { codigo: 'NATURAL', descripcion: 'NATURAL' },
    { codigo: 'JURIDICA', descripcion: 'JURIDICA' },
  ]

  constructor(
		private _modalRef: NzModalRef,
		private _messageService: NzMessageService,
	) {
    this.form = new FormGroup({
      nroIdentificacion: new FormControl(null, [Validators.required]),
			tipoIdentificacion: new FormControl(null, [Validators.required]),
			lugarNaci: new FormControl(null, [Validators.required]),
			razonSocial: new FormControl(null, [Validators.required]),
			email: new FormControl(null, [Validators.required]),
			phone: new FormControl(null, [Validators.required]),
			address: new FormControl(null, [Validators.required]),
      fechaNaci: new FormControl(null, [Validators.required]),
      tipoPersona: new FormControl(null, [Validators.required]),
      actividadComercial: new FormControl(null, [Validators.required]),
      genero: new FormControl(null),
    })
  }

  ngOnInit(): void {
  }

  cerrarModal() {
		this._modalRef.close(false)
	}

	guardarCliente() {
		if (this.form.invalid) {
			this.form.markAllAsTouched()
			return
		}

		this._messageService.success('Cliente agregado exitosamente')
		this._modalRef.close(true)
	}

}
