import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router, RouterLink } from '@angular/router';

import { BlogService, Blog, Abogado } from 'src/app/shared/services/blog/blog.service';
import { DatoscompartidosService } from 'src/app/shared/services/servicio-compartido/datoscompartidos.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  font: number = 1
  date: Date
  form: FormGroup
  isLoading: boolean = false

  blog: Blog={
    id_abogado:'',
    titulo:'',
    imagen:'',
    cuerpo:''
  };

  abogado: Abogado={
    id_abogado:'',
    nombres:'',
    apellidos:'',
    email:'',
    password:''
  };

  showBlogs() {
    this.isLoading = true

    // redirect to the blogs page
    setTimeout(() => {
      this.isLoading = false
      // window.open('/assets/paginas-samuel/Paginas/BlogIndividual.html', '_blank')
      
    }
      , 5000)
  }

  setFont(font: number) {
    this.font = font
    console.log("Selected Font: " + font)
  }

  user: { name: string; email: string; } = {
    name: 'John Doe',
    // email: 'john@email.com'
    email: this.datosCompartidosServicio.datoCompartido
  }

  constructor(
    private message: NzMessageService,
    private router: Router,
    private blogServicio: BlogService,
    private datosCompartidosServicio: DatoscompartidosService,
  ) {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      imagenB: new FormControl(null, [Validators.required]),
      blogBody: new FormControl(null, [Validators.required])
    })
    this.date = new Date()
  }


  publish() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      this.form.markAsDirty()
      return
    }else{
      this.agregarBlog()
    }

    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
      this.message.success('Blog creado exitosamente.');
      this.form.reset();
    }
      , 5000)
  }

  ngOnInit(): void {
    console.log('dato compartido--->'+this.user.email)

    this.blogServicio.getAbogado(this.user.email).subscribe(
      (res:any)=>{
        this.abogado = res[0];
        console.log(res[0]);
        this.user.name = this.abogado.nombres +' '+this.abogado.apellidos;
      },
      err => console.log(err)
    );

  }

  agregarBlog(){
    this.blog.id_abogado = this.abogado.id_abogado;
    this.blogServicio.addBlog(this.blog).subscribe(()=>{
        console.log(this.blog)
    });
  }



}
