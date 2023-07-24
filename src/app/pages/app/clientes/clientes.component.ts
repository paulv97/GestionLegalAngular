import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { finalize } from 'rxjs';
import { ClientesService } from 'src/app/shared/services/clientes/clientes.service';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  busqueda: string = ""
  clientes: any[] = []

  isLoadingEliminarCliente: boolean = false

  constructor(
    private message: NzMessageService,
    private clientesService: ClientesService,
    private _modalService: NzModalService,
  ) { }

  ngOnInit(): void {
    this.buscarClientes("")
  }

  buscarClientes(filtro: any) {
    this.clientesService.obtenerClientesPorAbogado(filtro)
    .pipe(finalize(() => console.log('asdf')))
    .subscribe(
      (clientes: any) => {
        console.log(clientes)
        this.clientes = clientes
      },
      (err) => {
        console.log(err)
        this.message.error(err.error.mensaje)
      }
    )
  }

  eliminarCliente(idCliente: any) {
    this.isLoadingEliminarCliente = true
    this.clientesService.eliminarCliente(idCliente)
    .pipe(finalize(() => this.isLoadingEliminarCliente = false))
    .subscribe(
      (resp: any) => {
        this.buscarClientes("")
      },
      (err) => {
        console.log(err)
        this.message.error(err.mensaje)
      }
    )
  }

  abrirModalClienteNuevo() {
		const modal = this._modalService.create({
			nzContent: NuevoClienteComponent,
			nzFooter: null,
		})

		modal.afterClose.subscribe(data => {
			if (!data) return

			this.buscarClientes("")
		})
	}

}
