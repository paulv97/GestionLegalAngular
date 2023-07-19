import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlogsAbogadosService {

  constructor(
    private http: HttpClient
  ) { }

    // get blogs con datos del abogado
    getBlogsAbogado(){
      return this.http.get('/blogs-abogados/blogsconAbog')
    }

    // get blog con datos del abogado
    getBlogAbogado(id_Blog:string){
      return this.http.get('/blogs-abogados/blogIndividualconAbog'+'/'+id_Blog);
      
    }

}

export interface BlogAbogado{
  id_blog?:string;
  id_abogado?:string;
  titulo?:string;
  imagen?:string;
  cuerpo?:string;
  fecha?:string;
  megusta?:string;
  nomegusta?:string;
  nombres?:string;
  apellidos?:string;
}
