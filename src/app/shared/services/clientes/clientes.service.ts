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

  verificarExistenciaCliente(nroIdentificacion: string) {
    return this.http.get(`/clientes/verificarExistencia/${nroIdentificacion}`)
  }

  crearCliente(cliente: any) {
    return this.http.post(`/clientes`, cliente)
  }

  eliminarCliente(idCliente: any) {
    return this.http.delete(`/clientes/${idCliente}`)
  }
}
