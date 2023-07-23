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
    return this.http.get('/documentos/allDocumentos');
  }

  // get documento
  getDocumento(idDoc:string){
    return this.http.get('/documentos/oneDocumento'+'/'+idDoc);
  }

  // agregar documento
  addDocumento(documento:Documento){
    return this.http.post('/documentos/addDocumento',documento);
  }

  // eliminar documento
  deleteDocumento(idDoc:string){
    return this.http.delete('/documentos/deleteDocumento'+'/'+idDoc);
  }

  // modificar documento
  editDocumento(idDoc:string, documento:Documento){
    return this.http.put('/documentos/updateDocumento'+'/'+idDoc,documento);
  }


}

export interface Documento{
  id_documento?:string;
  id_juicio?:string;
  juicio?:string;
  nombre?:string;
  descripcion?:string;
  documento?:string;
}


