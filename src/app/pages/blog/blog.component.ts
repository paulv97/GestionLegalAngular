import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BlogsAbogadosService, BlogAbogado } from 'src/app/shared/services/blogs-abogados/blogs-abogados.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogA: BlogAbogado={
    id_blog:'',
    id_abogado:'',
    titulo:'',
    imagen:'',
    cuerpo:'',
    fecha:'',
    megusta:'',
    nomegusta:'',
    nombres:'',
    apellidos:''
  };


  form: FormGroup;

  constructor(
    private message: NzMessageService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private BlogsAbogadosServicio:BlogsAbogadosService
  ) { 
    this.form = new FormGroup({
      comentarioB: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      nombreCom: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      emailCom: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
      
    })
  }

  ngOnInit(): void {
    const idBlog = <string>this.activeRoute.snapshot.params['id_Blog'];
    console.log('id Blog:'+idBlog);
    if(idBlog){
      this.BlogsAbogadosServicio.getBlogAbogado(idBlog).subscribe(
        (res: any) => {
          this.blogA = res[0];
          console.log(res[0]);
          this.blogA.cuerpo=this.blogA.cuerpo!.replace(/\n/g, ' ');

        },
        err => console.log(err)
      );
    }
  }

  validar() {
    if(this.form.invalid) {
      this.form.markAllAsTouched()
      this.form.markAsDirty()
      return
    }else{
      this.form.reset();
    }
  }

}
