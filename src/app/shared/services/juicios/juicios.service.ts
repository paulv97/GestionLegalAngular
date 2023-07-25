import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const NO_INTERCEPTOR_HEADERS = {
  headers: new HttpHeaders().set('No-Interceptor', 'true')
}

@Injectable({
  providedIn: 'root'
})
export class JuiciosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerTiposJuicios() {
    return [
      {
        idTipo: 1,
        tipoJuicio: 'Civil'
      },
      {
        idTipo: 2,
        tipoJuicio: 'Penal'
      },
      {
        idTipo: 3,
        tipoJuicio: 'Laboral'
      },
      {
        idTipo: 4,
        tipoJuicio: 'Familia'
      },
      {
        idTipo: 5,
        tipoJuicio: 'Administrativo'
      },
      {
        idTipo: 6,
        tipoJuicio: 'Constitucional'
      },
      {
        idTipo: 7,
        tipoJuicio: 'Contencioso'
      },
      {
        idTipo: 8,
        tipoJuicio: 'Tributario'
      },
      {
        idTipo: 9,
        tipoJuicio: 'Mercantil'
      },
      {
        idTipo: 10,
        tipoJuicio: 'Aduanero'
      },
      {
        idTipo: 11,
        tipoJuicio: 'Ambiental'
      },
      {
        idTipo: 12,
        tipoJuicio: 'Marítimo'
      },
      {
        idTipo: 13,
        tipoJuicio: 'Agrario'
      },
      {
        idTipo: 14,
        tipoJuicio: 'Ejecutivo'
      },
    ]
  }

  obtenerJuiciosPorAbogado(filtro: string) {
    return this.http.get(`/juicios?filtro=${filtro}`)
  }

  guardarJuicio(juicio: any) {
    return this.http.post(`/juicios`, juicio)
  }

  obtenerIncidentesJudicatura(codigoDependencia: any, anio: any, nroSecuencial: any) {
    return this.http.get(
      `https://api.funcionjudicial.gob.ec/informacion/getIncidenteJudicatura/${codigoDependencia}${anio}${nroSecuencial}`,
      NO_INTERCEPTOR_HEADERS
    )
  }
}
