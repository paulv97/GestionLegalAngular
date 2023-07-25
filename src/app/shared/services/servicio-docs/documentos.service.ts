import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  constructor(
    private http: HttpClient
  ) { }

  // get documentos
  // getDocumentos(idAbog:string){
  //   return this.http.get('/documentos/allDocumentos/'+idAbog);
  // }

  // get documentos
  getDocumentos(){
    return this.http.get('/documentos/allDocumentos/');
  }

  // get documento
  getDocumento(idDoc:string){
    return this.http.get('/documentos/oneDocumento'+'/'+idDoc);
  }

  // agregar documento
  // addDocumento(documento:Documento){
  addDocumento(documento: Documento, archivo: File) {
    // return this.http.post('/documentos/addDocumento',documento);
    const formData = new FormData();
    // formData.append('id_abogado', documento.id_abogado || '');
    formData.append('tipo', documento.tipo || '');
    formData.append('nombre', documento.nombre || '');
    formData.append('descripcion', documento.descripcion || '');
    formData.append('documento', archivo);

    return this.http.post('/documentos/addDocumento', formData);
  }

  // eliminar documento
  deleteDocumento(idDoc:string){
    return this.http.delete('/documentos/deleteDocumento'+'/'+idDoc);
  }

  // modificar documento
  editDocumento(idDoc:string, documento:Documento){
    return this.http.put('/documentos/updateDocumento'+'/'+idDoc,documento);
  }

  // modificar documento
  editDocumentoFile(idDoc:string, documento:Documento, file: File){
    // return this.http.put('/documentos/updateDocumentoFile'+'/'+idDoc,documento);
    const formData = new FormData();
    formData.append('tipo', documento.tipo || '');
    formData.append('nombre', documento.nombre || '');
    formData.append('descripcion', documento.descripcion || '');
    formData.append('documento', file);

    return this.http.put(`/documentos/updateDocumentoFile/${idDoc}`, formData);
  
  }


  //get Abogado
  // getAbogado(email:string){
  //   return this.http.get('/documentos/obtenerAbogado/'+email);
  // }

  downloadDoc(nombre: string): Observable<Blob> {
    return this.http.get('/documentos/downloadDocumento/' + nombre, {
      responseType: 'blob' // Indicar que esperamos una respuesta de tipo Blob
    });
  }


}

export interface Documento{
  id_documento?:string;
  id_abogado?:string;
  tipo?:string;
  nombre?:string;
  descripcion?:string;
  documento?:string ;
}


