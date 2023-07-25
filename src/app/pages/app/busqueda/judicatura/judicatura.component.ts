import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { DetalleJuicioComponent } from '../detalle-juicio/detalle-juicio.component';
import { JuiciosService } from 'src/app/shared/services/juicios/juicios.service';
import { finalize } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-judicatura',
  templateUrl: './judicatura.component.html',
  styleUrls: ['./judicatura.component.scss']
})

export class JudicaturaComponent implements OnInit {

  @Input() codigoDependencia: any
  @Input() anio: any
  @Input() nroSecuencial: any

  isLoadingCasos: boolean = false

  casos: any[] = []

  constructor(
    private _modalRef: NzModalRef,
    private modalService: NzModalService,
    private message: NzMessageService,
    private juiciosService: JuiciosService,
  ) { }

  ngOnInit(): void {
    this.obtenerCasos()
  }

  abrirDetalle() {
		const modal = this.modalService.create({
			nzContent: DetalleJuicioComponent,
			nzFooter: null,
			nzWidth: 1000,
		})
	}

  cerrarModal() {
		this._modalRef.close(false)
	}

  obtenerCasos() {
    this.isLoadingCasos = true
    this.juiciosService.obtenerIncidentesJudicatura(this.codigoDependencia, this.anio, this.nroSecuencial)
    .pipe(finalize(() => this.isLoadingCasos = false))
    .subscribe(
      (casos: any) => {
        this.casos = casos
      },
      (err: any) => {
        if(typeof err === 'string') {
          this.message.error(err)
          return
        }

        this.message.error(JSON.stringify(err))
      }
    )
  }

}
