import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

import { CorreoService,Correo } from 'src/app/shared/services/correo/correo.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  correo: Correo ={
    nombre:'',
    email:'',
    telefono:'',
    mensaje:''
  };
  
  form: FormGroup;

  constructor(
    private message: NzMessageService,
    private router: Router,
    private correoServicio: CorreoService
  ) { 
    this.form = new FormGroup({
      nombreC: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúÑñ ]+$')]),
      telefonoC: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      emailC: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
      mensajeC: new FormControl(null, [Validators.required ])
    })
  }

  ngOnInit(): void {
  }

  validar() {
    if(this.form.invalid) {
      this.form.markAllAsTouched()
      this.form.markAsDirty()
      return
    }else{
      this.enviarDatosCorreo();
      this.form.reset();
    }
  }

  enviarDatosCorreo(){
    console.log(this.correo);
    this.correoServicio.sendEmail(this.correo).subscribe(res =>{
      this.message.success("Su requemiento a sido enviado, nos contactaremos con usted");
      console.log(res);
    });
  }

}
