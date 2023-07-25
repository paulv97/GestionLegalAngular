import { Component, Input, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { finalize } from 'rxjs';
import { JuiciosService } from 'src/app/shared/services/juicios/juicios.service';

@Component({
  selector: 'app-detalle-juicio',
  templateUrl: './detalle-juicio.component.html',
  styleUrls: ['./detalle-juicio.component.scss']
})
export class DetalleJuicioComponent implements OnInit {

  @Input() idMovimientoJuicioIncidente: number = 0
  @Input() idJuicio: string = ''
  @Input() idJudicatura: string = ''
  @Input() idIncidenteJudicatura: number = 0
  @Input() nombreJudicatura: string = ''
  @Input() incidente: number = 0

  isLoadingDetalle: boolean = false

  detalle: any[] = []

  constructor(
    private _modalRef: NzModalRef,
    private message: NzMessageService,
    private juiciosService: JuiciosService,
  ) { }

  ngOnInit(): void {
    this.obtenerDetalle()
  }

  cerrarModal() {
		this._modalRef.close(false)
	}

  obtenerDetalle() {
    this.isLoadingDetalle = true
    this.juiciosService.obtenerActualizacionJudicatura({
      idMovimientoJuicioIncidente: this.idMovimientoJuicioIncidente,
      idJuicio: this.idJuicio,
      idJudicatura: this.idJudicatura,
      idIncidenteJudicatura: this.idIncidenteJudicatura,
      nombreJudicatura: this.nombreJudicatura,
      incidente: this.incidente
    })
    .pipe(finalize(() => this.isLoadingDetalle = false))
    .subscribe(
      (detalle: any) => {
        this.detalle = detalle
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
