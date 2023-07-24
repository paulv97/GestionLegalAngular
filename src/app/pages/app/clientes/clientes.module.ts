import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SearchPipeModule } from 'src/app/shared/pipes/search/search.module';
import { NuevoJuicioModule } from '../busqueda/nuevo-juicio/nuevo-juicio.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';



@NgModule({
  declarations: [
    ClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
		RouterModule.forChild([{ path: '', component: ClientesComponent },]),
		NzInputModule,
		NzButtonModule,
		NzIconModule,
		SearchPipeModule,
		NuevoJuicioModule,
		NzModalModule,
    NzTableModule,
    NzDividerModule,
    NzSpinModule,
  ]
})
export class ClientesModule { }
