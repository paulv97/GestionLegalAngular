import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  modificarJuicio(juicio: any) {
    return this.http.put(`/juicios`, juicio)
  }

  eliminarJuicio(idJuicio: any) {
    return this.http.delete(`/juicios/${idJuicio}`)
  }

  obtenerIncidentesJudicatura(codigoDependencia: any, anio: any, nroSecuencial: any) {
    return this.http.get(
      `https://pruebaiframe-wg7upc524q-uc.a.run.app/juicios/${codigoDependencia}${anio}${nroSecuencial}`,
      {
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*',
          'No-Interceptor': 'true'
        }
      }
    )
  }

  obtenerActualizacionJudicatura(payload: {
    idMovimientoJuicioIncidente: number,
    idJuicio: string,
    idJudicatura: string,
    idIncidenteJudicatura: number,
    nombreJudicatura: string,
    incidente: number
  }) {

    (payload as any).aplicativo = "web"

    return this.http.post(
      `https://pruebaiframe-wg7upc524q-uc.a.run.app/detalles`,
      payload,
    )
  }
}
