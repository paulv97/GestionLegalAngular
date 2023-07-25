import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-detalle-juicio',
  templateUrl: './detalle-juicio.component.html',
  styleUrls: ['./detalle-juicio.component.scss']
})
export class DetalleJuicioComponent implements OnInit {

  casos = [
    { tipo: 'RAZON', actividad: 'RAZÓN.- Siento por tal que la documentación escaneada, adjunta, guarda conformidad con los originales constantes de autos, tomadas del deprecatorio No. 01333202100658; y, dando cumplimiento a lo dispuesto en auto de sustanciación inmediato anterior, en esta fecha procedo a la devolución del deprecatorio en línea; con los documentos anexos trámite web, pertinentes. Particular que siento para los fines de Ley. Lo certifico. Ambato, diciembre 9 del 2022',fecha:'2022-12-09T14:24:54.000+00:00'},
    { tipo: 'RAZON', actividad: 'RAZÓN.- Siento por tal que la documentación escaneada, adjunta, guarda conformidad con los originales constantes de autos, tomadas del deprecatorio No. 01333202100658; y, dando cumplimiento a lo dispuesto en auto de sustanciación inmediato anterior, en esta fecha procedo a la devolución del deprecatorio en línea; con los documentos anexos trámite web, pertinentes. Particular que siento para los fines de Ley. Lo certifico. Ambato, diciembre 9 del 2022',fecha:'2022-12-09T14:24:54.000+00:00' },
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

}
