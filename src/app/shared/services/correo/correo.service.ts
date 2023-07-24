import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(
    private http: HttpClient
  ) { }

  sendEmail(correo:Correo){
    return this.http.post('/correos/envioCorreo',correo);
  }


}

export interface Correo{
  nombre?:string;
  email?:string;
  telefono?:string;
  mensaje?:string;
}
