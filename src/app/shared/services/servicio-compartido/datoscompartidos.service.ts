import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatoscompartidosService {

  datoCompartido:any;

  constructor() { }
}

export interface Abogado{
  id_abogado?:string;
  nombres?:string;
  apellidos?:string;
  email?:string;
  password?:string;
}