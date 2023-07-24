import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { finalize } from 'rxjs';
import { ClientesService } from 'src/app/shared/services/clientes/clientes.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss']
})
export class NuevoClienteComponent implements OnInit {

  isLoadingGuardar: boolean = false

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
    private _modal: NzModalService,
		private _messageService: NzMessageService,
    private clientesService: ClientesService,
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

  verificarExistenciaCliente() {
    if(this.form.get('nroIdentificacion')?.invalid) {
      return
    }

    const nroIdentificacion = this.form.get('nroIdentificacion')?.value

    this.clientesService.verificarExistenciaCliente(nroIdentificacion)
    .subscribe(
      (existe: any) => {
        if(existe) {
          this._modal.confirm({
            nzTitle: 'Cliente ya se encuentra registrado',
            nzContent: 'Estimado usuario, el cliente con identificacion ' + nroIdentificacion + ' ya existe, desea agregarlo a su lista de clientes?',
            nzOnOk: () => this.guardarCliente()
          });
        }
      },
      (err) => {
        console.log('Error verificar existencia cliente', err)
      }
    )
  }

  submit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched()
			return
		}

    this.guardarCliente()
	}

	guardarCliente() {
		this.isLoadingGuardar = true
    const form = this.form.getRawValue()
    this.clientesService.crearCliente(form)
    .pipe(finalize(() => this.isLoadingGuardar = false))
    .subscribe(
      (resp: any) => {
        this._messageService.success(resp.mensaje)
        this._modalRef.close(true)
      },
      (err) => {
        this._messageService.error(err?.mensaje ? err.mensaje : err)
      }
    )
	}

}
