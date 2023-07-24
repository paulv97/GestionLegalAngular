import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerClientesPorAbogado(filtro: string) {
    return this.http.get(`/clientes?filtro=${filtro}`)
  }
}
