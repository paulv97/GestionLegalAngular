import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BlogsAbogadosService, BlogAbogado } from 'src/app/shared/services/blogs-abogados/blogs-abogados.service';
import { NzModalService,NzModalRef } from 'ng-zorro-antd/modal';
import { Router, ActivatedRoute } from '@angular/router';

import { ComentariosService,Abogado,Comentario,ComentarioAbog } from 'src/app/shared/services/comentarios-blog/comentarios.service';

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

  abogado: Abogado={
    id_abogado:'',
    nombres:'',
    apellidos:'',
    email:'',
    password:''
  };

  comentario: Comentario ={
    id_comentario:'',
    id_blog:'',
    id_abogado:'',
    email:'',
    cuerpo:''
  };

  comentarioAbog: ComentarioAbog ={
    id_comentario:'',
    id_blog:'',
    id_abogado:'',
    email:'',
    cuerpo:'',
    fecha:'',
    nombres:'',
    apellidos:''
  };

  nombreCompleto: string ='';
  idBlog: string ='';
  listaComentarios: ComentarioAbog[]=[];
  correo: string = '';

  form: FormGroup;
  
  constructor(
    private message: NzMessageService,
    private modalService: NzModalService,
    
    private router: Router,
    private activeRoute: ActivatedRoute,
    private BlogsAbogadosServicio:BlogsAbogadosService,
    private ComentariosServicio:ComentariosService

  ) { 
    this.form = new FormGroup({
      comentarioB: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      nombreCom: new FormControl(null, [Validators.required]),
      emailCom: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
      
    });


  }

  ngOnInit(): void {
    this.idBlog = <string>this.activeRoute.snapshot.params['id_Blog'];
    console.log('id Blog:'+this.idBlog);
    if(this.idBlog){
      this.BlogsAbogadosServicio.getBlogAbogado(this.idBlog).subscribe(
        (res: any) => {
          this.blogA = res[0];
          console.log(res[0]);
          this.blogA.cuerpo=this.blogA.cuerpo!.replace(/\n/g, ' ');
          this.listarComentariosBlog();
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
      this.agregarComentario();
      this.message.success('Comentario realizado');
      this.form.reset();
    }
  }

  // verifica que un abogado pueda comentar
  obtenerAbogado(){
    this.ComentariosServicio.getDatosAbog(this.abogado.email!).subscribe(
      (res:any)=>{
        if(Object.keys(res).length >0){
          this.abogado = res[0];
          console.log(res[0]);
          this.nombreCompleto = this.abogado.nombres +' '+ this.abogado.apellidos;

        }else{
          this.message.error('Usted no puede comentar')
          console.log('no hay un abogado');
          this.form.reset();
        }
      },
      err => console.log(err)
    );
  }
  // agrega un comentario al blog
  agregarComentario(){
    delete this.comentario.id_comentario;
    this.comentario.id_blog=this.idBlog;
    this.comentario.id_abogado=this.abogado.id_abogado;
    this.comentario.email=this.abogado.email;
    this.ComentariosServicio.addComentario(this.comentario).subscribe(()=>{
      this.listarComentariosBlog();
    });

  }

  listarComentariosBlog(){
    this.ComentariosServicio.getComentariosBlog(this.idBlog).subscribe(
      res => {
        console.log(res);
        this.listaComentarios=<any>res;
      },
      err => console.log(err) 
    );
  }

  ventanaE(idC:string,idB:string,idA:string) {
    let correoIngresado = prompt('Ingresar Correo Electrónico:');
    if (correoIngresado !== null && correoIngresado.trim() !== "") {
      this.correo = correoIngresado;
      // Acciones a realizar con el correo ingresado
      console.log(this.correo);
      this.eliminarComentario(idC,idB,idA,this.correo);
      
    }

  }

  eliminarComentario(idC:string,idB:string,idA:string,email:string){
    this.ComentariosServicio.verificarComentarioAbog(idC,idB,idA,email).subscribe(
      (res:any) =>{
        if(Object.keys(res).length >0){
          console.log(res[0]);
          this.ComentariosServicio.deleteComentario(idC,idB).subscribe(
            res=>{
              console.log(res);
              this.message.success('Comentario eliminado');
              this.listarComentariosBlog();
            },
            err => console.log(err)
          );
        }else{
          this.message.error('Este no es su comentario')
          console.log('No es su comentario');
          this.form.reset();
        }
      },
      err => console.log(err)
    );
  }


}
