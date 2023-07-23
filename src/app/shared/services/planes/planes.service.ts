import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerPlanes() {
    return this.http.get('/suscripciones/planes')
  }

  obtenerPlan(idPlan: any) {
    return this.http.get(`/suscripciones/planes/${idPlan}`)
  }

  procesarPago(datosPago: any) {
    return this.http.post(`/suscripciones/procesar-pago`, datosPago)
  }

  registrarTarjeta(datosTarjeta: any) {
    return this.http.post(`/tarjetas/registro-tarjeta`, datosTarjeta)
  }
}
