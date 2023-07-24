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
  listaDocumentosF: Documento[]= [];
  terminoBusqueda:string='';

  nameFile:string='';
  
  private fileTmp:any;

  doc: Documento = {
    id_documento:'',
    id_abogado:'',
    tipo:'',
    nombre:'',
    descripcion:'',
    documento:'',
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
      // this.form.reset();
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
    delete this.doc.documento;

    // this.DocumentosServicio.addDocumento(this.doc).subscribe(()=>{
    //   this.listarDocumentos();
    // });
    if (!this.fileTmp || !this.fileTmp.fileRaw) {
      this.message.warning('Seleccione un archivo antes de guardar');
      return;
    }

    this.DocumentosServicio.addDocumento(this.doc, this.fileTmp.fileRaw).subscribe(() => {
      this.listarDocumentos();
      this.form.reset();
      this.fileTmp = null;
      
    });

  }

  // lista todos los documentos
  listarDocumentos(){
    this.DocumentosServicio.getDocumentos(this.abogado.id_abogado!).subscribe(
      res=>{
        console.log(res)
        // if(res.rows){
          this.ListaDocumentos=<any>res;
          this.listaDocumentosF=<any>res;
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

  // descargar archivo
  descargarArchivo(name:string){

    this.DocumentosServicio.downloadDoc(name).subscribe(
      (res: Blob) => {
        // Crear una URL local para el archivo blob
        const url = window.URL.createObjectURL(res);

        // Crear un enlace temporal y hacer clic en él para iniciar la descarga
        const a = document.createElement('a');
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();

        // Liberar la URL del blob
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error('Error al descargar el archivo:', error);
      }
    );
  }

  // modifica un documento
  modificarDoc(){
    if(this.doc.id_documento!== null && this.doc.id_documento!==''){
      delete this.doc.id_abogado;
      delete this.doc.documento;
      console.log('id documento'+this.doc.id_documento);
      if (!this.fileTmp || !this.fileTmp.fileRaw){
        this.DocumentosServicio.editDocumento(this.doc.id_documento as string, this.doc).subscribe(
          res=>{
              console.log(res);
              
              this.listarDocumentos();
          },
          err=>console.log(err)
        );
      }else{
        this.DocumentosServicio.editDocumentoFile(this.doc.id_documento as string, this.doc, this.fileTmp.fileRaw)
          .subscribe(res => {
            console.log(res);
            this.listarDocumentos();
            this.fileTmp = null;
          }, 
          err => console.log(err));
      }

    }else{
      this.message.warning('Seleccione un documento para editar');
    }

  }

  getFile($event:any):void{
    console.log($event);
    const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw:file,
      fileName:file.name
    }

  }

  filtrarDocumentos() {
    if (!this.terminoBusqueda || this.terminoBusqueda.trim() === '') {
      this.listaDocumentosF = this.ListaDocumentos;
    } else {
      const terminoBusquedaLowerCase =this.quitarTildes( this.terminoBusqueda.toLowerCase().trim());
      this.listaDocumentosF = this.ListaDocumentos.filter(documento =>{
      
        return ( 
          this.quitarTildes(documento.tipo!)?.toLowerCase().includes(terminoBusquedaLowerCase) ||
          this.quitarTildes(documento.nombre!)?.toLowerCase().includes(terminoBusquedaLowerCase) ||
          this.quitarTildes(documento.descripcion!)?.toLowerCase().includes(terminoBusquedaLowerCase) ||
          this.quitarTildes(documento.documento!)?.toLowerCase().includes(terminoBusquedaLowerCase)
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
