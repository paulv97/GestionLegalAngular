import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosJudicialesService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerCategorias() {
    return this.http.get('/servicios-judiciales/categorias')
  }

  obtenerUbicaciones(idCategoria: number) {
    return this.http.get(`/servicios-judiciales/ubicaciones/${idCategoria}`)
  }
}
