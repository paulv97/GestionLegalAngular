import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { finalize } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { PlanesService } from 'src/app/shared/services/planes/planes.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {
  isLoading: boolean = false
  planes: any[] = []

  constructor(
    private message: NzMessageService,
    private router: Router,
    private planesService: PlanesService,
    private localStorage: LocalStorageService,
  ) { }

  ngOnInit(): void {
    this.obtenerPlanes()
  }

  obtenerPlanes() {
    this.isLoading = true
    this.planesService.obtenerPlanes()
    .pipe(finalize(() => this.isLoading = false))
    .subscribe(
      (planes: any) => {
        this.planes = planes
      },
      (err) => {
        console.log(err)
        this.message.error(err.error.mensaje)
      }
    )
  }

  choosePlan(idPlan: number) {
    const sesion = this.localStorage.getInformation()

    if(!sesion || sesion.idSuscripcion) {
      this.router.navigate([`/login`])
      return
    }

    if(!sesion?.idSuscripcion) {
      this.router.navigate([`checkout/${idPlan}`])
      return
    }
  }
}
