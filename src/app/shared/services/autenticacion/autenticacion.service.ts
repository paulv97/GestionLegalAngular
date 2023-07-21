import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(
    private http: HttpClient
  ) { }

  registrar(usuario: any) {
    return this.http.post('/autenticacion/registro-usuario', usuario)
  }

  login(email: string, clave: string) {
    return this.http.post('/autenticacion/login', {
      email: email,
      clave: clave
    })
  }
}
