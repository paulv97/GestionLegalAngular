import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DocumentosService, Documento } from 'src/app/servicios/servicio-docs/documentos.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {

  // variable
  ListaDocumentos: Documento[]= [];

  doc: Documento = {
    id:'',
    codigo_juicio:'',
    tipo:'',
    nombre:'',
    descripcion:'',
    documento:''
  };

  docEdit: Documento = {
    id:'',
    codigo_juicio:'',
    tipo:'',
    nombre:'',
    descripcion:'',
    documento:''
  };

  form: FormGroup
  
  selectedOption: string = '' ;
  options: string[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];

  constructor(
    private message: NzMessageService,
    private router: Router,
    private DocumentosServicio:DocumentosService
  ) {
    this.form = new FormGroup({
      idDoc: new FormControl,
      tipoDoc: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      nombreDoc: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      descripDoc: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      comboCodigo: new FormControl(null, Validators.required)
    })
   }

  ngOnInit(): void {

    this.listarDocumentos();
    
  }
  // valida que el form este completo
  validar() {
    if(this.form.invalid) {
      this.form.markAllAsTouched()
      this.form.markAsDirty()
      return
    }else{
      this.agregarDocumento();
      this.form.reset();
    }
  }

    // valida que el form este completo al editar
    validar2() {
      if(this.form.invalid) {
        this.form.markAllAsTouched()
        this.form.markAsDirty()
        return
      }else{
        this.modificarDoc();
        this.form.reset();
      }
    }

  // agrega un documento
  agregarDocumento(){
    delete this.doc.id;
    this.DocumentosServicio.addDocumento(this.doc).subscribe(()=>{
      this.listarDocumentos();
    });

  }

  // lista todos los documentos
  listarDocumentos(){
    this.DocumentosServicio.getDocumentos().subscribe(
      res=>{
        console.log(res)
        this.ListaDocumentos=<any>res;
      },
      err => console.log(err)
    );
  }

  // elimina un documento
  eliminarDoc(id:string){
    this.DocumentosServicio.deleteDocumento(id).subscribe(
      res=>{
        console.log('documento eliminado');
        this.listarDocumentos();
      },
      err=> console.log(err)
    );
  }

  // obtener un equipo
  obtenerDoc(id:string){
    this.DocumentosServicio.getDocumento(id).subscribe(
      (res: any) =>{
          this.doc = res[0];
          console.log(res);
      },
        err=> console.log(err)
      );
  }

  // modifica un documento
  modificarDoc(){
    // this.router.navigate(['/edit'+id]);
    this.DocumentosServicio.editDocumento(this.doc.id as string, this.doc).subscribe(
      res=>{
          console.log(res);
          this.listarDocumentos();
      },
      err=>console.log(err)
    );

  }


}
