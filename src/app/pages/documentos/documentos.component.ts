import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DocumentosService, Documento } from 'src/app/shared/services/servicio-docs/documentos.service';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {

  // variable
  ListaDocumentos: Documento[]= [];

  doc: Documento = {
    id_documento:'',
    id_juicio:'',
    juicio:'',
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
      // tipoDoc: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      nombreDoc: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      descripDoc: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      comboJuicios: new FormControl(null, Validators.required)
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
    delete this.doc.id_documento;
    this.doc.id_juicio='1';
    this.DocumentosServicio.addDocumento(this.doc).subscribe(()=>{
      this.listarDocumentos();
    });

  }

  // lista todos los documentos
  listarDocumentos(){
    this.DocumentosServicio.getDocumentos().subscribe(
      res=>{
        console.log(res)
        // if(res.rows){
          this.ListaDocumentos=<any>res;
        // }
        
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

  // obtener un documento
  obtenerDoc(id:string){
    this.DocumentosServicio.getDocumento(id).subscribe(
      (res: any) =>{
          this.doc = res[0];
          console.log(res[0]);
      },
        err=> console.log(err)
      );
  }

  // modifica un documento
  modificarDoc(){
    // this.router.navigate(['/edit'+id]);
    if(this.doc.id_documento?.length){
      this.doc.id_juicio='3';
      this.DocumentosServicio.editDocumento(this.doc.id_documento as string, this.doc).subscribe(
        res=>{
            console.log(res);
            this.listarDocumentos();
        },
        err=>console.log(err)
      );

    }else{
      this.message.warning("Elija un documento para editar")
    }
  }


}
