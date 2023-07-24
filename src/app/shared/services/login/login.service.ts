import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  checkLogin(email: string, password: string) {
    return this.http.post('/login', { email: email, password: password });
  }
}


export interface Abogado {
  id_abogado?: string;
  nombres?: string;
  apellidos?: string;
  email?: string;
  password?: string;
}
