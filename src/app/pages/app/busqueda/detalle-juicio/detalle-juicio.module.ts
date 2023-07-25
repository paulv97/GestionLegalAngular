import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal'; // Importa NzModalModule
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SearchPipeModule } from 'src/app/shared/pipes/search/search.module';
import { DetalleJuicioComponent } from './detalle-juicio.component';




@NgModule({
  declarations: [ DetalleJuicioComponent],
  exports: [DetalleJuicioComponent],
  imports: [
    CommonModule,
    NzModalModule, // Añade NzModalModule a la lista de importaciones
    NzInputModule,
    FormsModule,
    NzButtonModule,
    NzIconModule,
    SearchPipeModule,
  ]
})
export class DetalleJuicioModule { }
