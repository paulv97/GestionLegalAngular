import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JudicaturaComponent } from './judicatura.component';
import { NzModalModule } from 'ng-zorro-antd/modal'; // Importa NzModalModule
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SearchPipeModule } from 'src/app/shared/pipes/search/search.module';
import { DetalleJuicioModule } from '../detalle-juicio/detalle-juicio.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';



@NgModule({
  declarations: [
    JudicaturaComponent
  ],
  exports: [JudicaturaComponent],
  imports: [
    CommonModule,
    NzModalModule, // Añade NzModalModule a la lista de importaciones
    NzInputModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    SearchPipeModule,
    DetalleJuicioModule,
    NzSpinModule,
  ]
})
export class JudicaturaModule { }
