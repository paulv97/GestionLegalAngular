import { Component, OnInit } from '@angular/core';
import { BlogsAbogadosService, BlogAbogado } from 'src/app/shared/services/blogs-abogados/blogs-abogados.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  // variable contine los blogs con datos de abogado
  listaBlogsAbogados: BlogAbogado[]= [];

  constructor(
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
      },
      err => console.log(err)
    );
  }

}
