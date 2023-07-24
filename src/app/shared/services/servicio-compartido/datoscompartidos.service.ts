import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatoscompartidosService {

  private readonly LS_KEY = 'datoCompartido';
  datoCompartido:any;

  constructor() { 
    this.recuperarDatoCompartido();
  }

  // Método para guardar el dato compartido en el localStorage
  guardarDatoCompartido(): void {
    localStorage.setItem(this.LS_KEY,this.datoCompartido);
  }

  // Método para recuperar el dato compartido del localStorage
  private recuperarDatoCompartido(): void {
    const datoGuardado = localStorage.getItem(this.LS_KEY);
    if (datoGuardado) {
      this.datoCompartido = datoGuardado;
    }
  }


}

export interface Abogado{
  id_abogado?:string;
  nombres?:string;
  apellidos?:string;
  email?:string;
  password?:string;
}