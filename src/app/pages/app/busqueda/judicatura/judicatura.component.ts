import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DetalleJuicioComponent } from '../detalle-juicio/detalle-juicio.component';

@Component({
  selector: 'app-judicatura',
  templateUrl: './judicatura.component.html',
  styleUrls: ['./judicatura.component.scss']
})

export class JudicaturaComponent implements OnInit {

  casos = [
    { nombre: 'Judicatura 1', ciudad: 'Ciudad 1' },
    { nombre: 'Judicatura 2', ciudad: 'Ciudad 2' },
    // Añade más casos según sea necesario
  ];

  isVisible = false;

  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
  }

  abrirModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  abrirDetalle() {
		const modal = this.modalService.create({
			nzContent: DetalleJuicioComponent,
			nzFooter: null,
			nzWidth: 1000,
		})


	}

}
