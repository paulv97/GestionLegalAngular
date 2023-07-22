import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService,NzModalRef } from 'ng-zorro-antd/modal';
import { Router, ActivatedRoute } from '@angular/router';

import { BlogsAbogadosService, BlogAbogado, LikesDislikes } from 'src/app/shared/services/blogs-abogados/blogs-abogados.service';
import { ComentariosService,Abogado,Comentario,ComentarioAbog } from 'src/app/shared/services/comentarios-blog/comentarios.service';

import { LocalStorageService
 } from 'src/app/shared/services/local-storage/local-storage.service';

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

  likeDislike: LikesDislikes ={
    megusta:'',
    nomegusta:''
  };

  nombreCompleto: string ='';
  idBlog: string ='';
  listaComentarios: ComentarioAbog[]=[];
  correo: string = '';

  likedBlogs: string[]=[];
  dislikedBlogs: string[] = [];

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
      comentarioB: new FormControl(null, [Validators.required]),
      nombreCom: new FormControl(null, [Validators.required]),
      emailCom: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
      
    });

    // const likedBlogsFromLocalStorage = localStorage.getItem('likedBlogs');
    // if(likedBlogsFromLocalStorage){
    //   this.likedBlogs = JSON.parse(likedBlogsFromLocalStorage);
    // }


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

    const localStorageLikedBlogs = localStorage.getItem('likedBlogs');
    const localStorageDislikedBlogs = localStorage.getItem('dislikedBlogs');

    if (localStorageLikedBlogs) {
      this.likedBlogs = JSON.parse(localStorageLikedBlogs);
    }

    if (localStorageDislikedBlogs) {
      this.dislikedBlogs = JSON.parse(localStorageDislikedBlogs);
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
    if(this.abogado.email?.length){
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
    }else{
      this.message.error('Ingrese un correo electronico')
    }
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
          this.message.error('Este no es su comentario');
          console.log('No es su comentario');
          this.form.reset();
        }
      },
      err => console.log(err)
    );
  }

  aumentarLikes(){
    this.obtenerLikesDislike();
    if(!this.dislikedBlogs.includes(this.idBlog) && !this.likedBlogs.includes(this.idBlog)){

      this.likedBlogs.push(this.idBlog);
      localStorage.setItem('likedBlogs',JSON.stringify(this.likedBlogs));

      this.BlogsAbogadosServicio.updateLikeBlog(this.idBlog).subscribe(
        res => {
          console.log(res);
          this.message.success('Like guardado');
          this.obtenerLikesDislike();
        },
        err => console.log(err)
      );
    }else{
      this.message.warning('Ya diste like o dislike a este blog.');
    }
  }

  aumentarDislikes(){
    this.obtenerLikesDislike();
    if(!this.dislikedBlogs.includes(this.idBlog) && !this.likedBlogs.includes(this.idBlog)){

      this.dislikedBlogs.push(this.idBlog);
      localStorage.setItem('dislikedBlogs',JSON.stringify(this.dislikedBlogs));

      this.BlogsAbogadosServicio.updateDislikeBlog(this.idBlog).subscribe(
        res => {
          console.log(res);
          this.message.success('Dislike guardado');
          this.obtenerLikesDislike();
        },
        err => console.log(err)
      );
    }else{
      this.message.warning('Ya diste like o dislike a este blog.');
    }
  }

  obtenerLikesDislike(){
    this.BlogsAbogadosServicio.getLikeDislike(this.idBlog).subscribe(
      (res: any) => {
        this.likeDislike = res[0];
        console.log(res[0]);
        this.blogA.megusta=this.likeDislike.megusta;
        this.blogA.nomegusta=this.likeDislike.nomegusta;
      },
       err => console.log(err)
    );
  }

  // compartirBlogF(){
  //   const urlActual = window.location.href;
  //   console.log(urlActual);
  //   // const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlActual)}`;
  //   // window.open(facebookShareURL, '_blank', 'height=400,width=600');
  // }


}
