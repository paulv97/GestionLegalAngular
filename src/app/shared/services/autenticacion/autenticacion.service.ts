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

  registrar_con_google(usuario: any) {
    return this.http.post('/autenticacion/registro-usuario-google', usuario)
  }

  login(email: string, clave: string) {
    return this.http.post('/autenticacion/login', {
      email: email,
      clave: clave
    })
  }

  loginGoogle(email: string) {
    return this.http.post('/autenticacion/login-google', {
      email: email
    })
  }
}
