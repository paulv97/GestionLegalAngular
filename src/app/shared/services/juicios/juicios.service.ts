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
      `https://cors-anywhere.herokuapp.com/https://api.funcionjudicial.gob.ec/informacion/getIncidenteJudicatura/${codigoDependencia}${anio}${nroSecuencial}`,
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

    const headers = {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'es-ES,es;q=0.9',
      'Connection': 'keep-alive',
      'Host': 'api.funcionjudicial.gob.ec',
      'Origin': 'https://procesosjudiciales.funcionjudicial.gob.ec',
      'Referer': 'https://procesosjudiciales.funcionjudicial.gob.ec/',
      'sec-ch-ua': 'Opera GX;v=99, Chromium;v=113, Not-A.Brand;v=24',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': 'Windows',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'same-site',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 OPR/99.0.0.0',
      'No-Interceptor': 'true'
    }

    return this.http.post(
      `https://api.funcionjudicial.gob.ec/informacion/actuacionesJudiciales`,
      payload,
      { headers }
    )
  }
}
