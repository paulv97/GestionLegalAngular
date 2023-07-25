import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient
  ) { }

  // add un blog
  addBlog(blog:Blog){
    return this.http.post('/blog/addBlog',blog);
  }

  //get Abogado
  getAbogado(){
    return this.http.get('/blog/obtenerAbogado/');
  }

}

export interface Blog{
  titulo?:string;
  imagen?:string;
  cuerpo?:string;
}

export interface Abogado{
  id_abogado?:string;
  nombres?:string;
  apellidos?:string;
  email?:string;
  password?:string;
}
