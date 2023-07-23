import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DocumentosService, Documento } from 'src/app/shared/services/servicio-docs/documentos.service';
import { DatoscompartidosService, Abogado } from 'src/app/shared/services/servicio-compartido/datoscompartidos.service';

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
    id_abogado:'',
    tipo:'',
    nombre:'',
    descripcion:'',
    documento:''
  };

  // variable carga datos del abogado 
  abogado: Abogado={
    id_abogado:'',
    nombres:'',
    apellidos:'',
    email:'',
    password:''
  };

  form: FormGroup;
  
  selectedOption: string = '' ;
  options: string[] = [
    'Juicio',
    'Contratación',
    'Facturación',
    'Corporativos',
    'Investigación jurídica',
    'Consultoría legal',
    'Propiedad intelectual',
    'Otro'
  ];

  constructor(
    private message: NzMessageService,
    private router: Router,
    private DocumentosServicio:DocumentosService,
    private datosCompartidosServicio: DatoscompartidosService
  ) {
    this.form = new FormGroup({
      idDoc: new FormControl,
      // tipoDoc: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      nombreDoc: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      descripDoc: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      comboTipo: new FormControl(null, Validators.required)
    })
   }

  ngOnInit(): void {

    console.log(this.datosCompartidosServicio.datoCompartido);
    this.DocumentosServicio.getAbogado(this.datosCompartidosServicio.datoCompartido).subscribe(
      (res:any)=>{
        this.abogado = res[0];
        console.log(res[0]);
        this.listarDocumentos();
      },
      err => console.log(err)
    );
    
    
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
    this.doc.id_abogado=this.abogado.id_abogado;
    this.DocumentosServicio.addDocumento(this.doc).subscribe(()=>{
      this.listarDocumentos();
    });

  }

  // lista todos los documentos
  listarDocumentos(){
    this.DocumentosServicio.getDocumentos(this.abogado.id_abogado!).subscribe(
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
    if(this.doc.id_documento!== null && this.doc.id_documento!==''){
      delete this.doc.id_abogado
      console.log('id documento'+this.doc.id_documento);
      this.DocumentosServicio.editDocumento(this.doc.id_documento as string, this.doc).subscribe(
        res=>{
            console.log(res);
            
            this.listarDocumentos();
        },
        err=>console.log(err)
      );
    }else{
      this.message.warning('Seleccione un documento para editar');
    }

  }


}
