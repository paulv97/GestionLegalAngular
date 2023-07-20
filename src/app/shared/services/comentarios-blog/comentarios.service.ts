import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(
    private http: HttpClient
  ) { }

  // get datos abogado por el correo
  getDatosAbog(email:string){
    return this.http.get('/comentarios/datosAbogado/'+email);
  }


}

export interface Abogado{
  id_abogado?:string;
  nombres?:string;
  apellidos?:string;
  email?:string;
  password?:string;
}
