import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  form: FormGroup

  constructor(
    private message: NzMessageService,
    private router: Router
  ) { 
    this.form = new FormGroup({
      nombreC: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      telefonoC: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      emailC: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
      mensajeC: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')])
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
      this.form.reset();
    }
  }

}
