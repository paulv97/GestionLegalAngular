import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  constructor(
    private http: HttpClient
  ) { }

  // get documentos
  getDocumentos(){
    return this.http.get('/apidocumentos/documentos');
  }

  // get documento
  getDocumento(id:String){
    return this.http.get('/apidocumentos/documentos'+'/'+id);
  }

  // agregar documento
  addDocumento(documento:Documento){
    return this.http.post('/apidocumentos/documentos',documento);
  }

  // eliminar documento
  deleteDocumento(id:String){
    return this.http.delete('/apidocumentos/documentos'+'/'+id);
  }

  // modificar documento
  editDocumento(id:String, documento:Documento){
    return this.http.put('/apidocumentos/documentos'+'/'+id,documento);
  }


}

export interface Documento{
  id?:string;
  codigo_juicio?:string;
  tipo?:string;
  nombre?:string;
  descripcion?:string;
  documento?:string;
}


