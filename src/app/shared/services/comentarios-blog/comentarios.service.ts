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

  // add un comentario a un blog
  addComentario(comentario:Comentario){
    return this.http.post('/comentarios/addComentario',comentario);
  }

  // get comentarios de un blog
  getComentariosBlog(idBlog:string){
    return this.http.get('/comentarios/comentariosBlog/'+idBlog);
  }

  //verificar comentario
  verificarComentarioAbog(idComment:string,idBlog:string,idAbog:string,email:string){
    return this.http.get('/comentarios/comentarioAbogado/'+idComment+'/'+idBlog+'/'+idAbog+'/'+email);

  }

  // delete comentario
  deleteComentario(id_comentario:string,id_blog:string){
    return this.http.delete('/comentarios/eliminarComment/'+id_comentario+'/'+id_blog);
  }


}

export interface Abogado{
  id_abogado?:string;
  nombres?:string;
  apellidos?:string;
  email?:string;
  password?:string;
}

export interface Comentario{
  id_comentario?:string;
  id_blog?:string;
  id_abogado?:string;
  email?:string;
  cuerpo?:string;
}

export interface ComentarioAbog{
  id_comentario?:string;
  id_blog?:string;
  id_abogado?:string;
  email?:string;
  cuerpo?:string;
  fecha?:string;
  nombres?:string;
  apellidos?:string;
}

