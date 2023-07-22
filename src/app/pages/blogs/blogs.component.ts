import { Component, OnInit } from '@angular/core';
import { BlogsAbogadosService, BlogAbogado } from 'src/app/shared/services/blogs-abogados/blogs-abogados.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  // variable contine los blogs con datos de abogado
  listaBlogsAbogados: BlogAbogado[]= [];
  listaBlogsAbogadosF: BlogAbogado[]= [];
  terminoBusqueda:string='';

  constructor(
    private router: Router,
    private BlogsAbogadosServicio:BlogsAbogadosService
  ) { }

  ngOnInit(): void {

    this.listarBlogs();
  }

  // lista los blogs con su autor abogado
  listarBlogs(){
    this.BlogsAbogadosServicio.getBlogsAbogado().subscribe(
      res=>{
        console.log(res)
        this.listaBlogsAbogados=<any>res;
        this.listaBlogsAbogadosF=<any>res;
      },
      err => console.log(err)
    );
  }

  // dirigir a la pagina blog y carga el blog
  cargarBlog(idBlog:String){
    this.router.navigate(['/blog/'+idBlog]);
  }

  filtrarBlogs() {
    if (!this.terminoBusqueda || this.terminoBusqueda.trim() === '') {
      this.listaBlogsAbogadosF = this.listaBlogsAbogados;
    } else {
      const terminoBusquedaLowerCase =this.quitarTildes( this.terminoBusqueda.toLowerCase().trim());
      this.listaBlogsAbogadosF = this.listaBlogsAbogados.filter(blog =>{
        const nombreCompleto = (blog.nombres + ' ' + blog.apellidos).toLowerCase();
        return ( 
          this.quitarTildes(blog.titulo!)?.toLowerCase().includes(terminoBusquedaLowerCase) ||
          this.quitarTildes(blog.nombres!)?.toLowerCase().includes(terminoBusquedaLowerCase) ||
          this.quitarTildes(blog.apellidos!)?.toLowerCase().includes(terminoBusquedaLowerCase) ||
          this.quitarTildes(nombreCompleto!)?.toLowerCase().includes(terminoBusquedaLowerCase)
        );
      });
    }
  }

  quitarTildes(texto: string): string {
    const mapaTildes: any = {
      á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u',
      Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U'
    };
    
    return texto.replace(/[áéíóúÁÉÍÓÚ]/g, letra => mapaTildes[letra]);
  }

}
