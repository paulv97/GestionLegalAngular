import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {

  form: FormGroup
  
  selectedOption: string = '' ;
  options: string[] = [
    'Opcion 1',
    'Opcion 2',
    'Opcion 3'
  ];

  constructor(
    private message: NzMessageService,
    private router: Router
  ) {
    this.form = new FormGroup({
      tipoDoc: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      nombreDoc: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      descripDoc: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),
      comboCodigo: new FormControl(null, Validators.required)
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
