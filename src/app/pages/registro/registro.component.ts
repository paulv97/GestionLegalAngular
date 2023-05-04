import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  form: FormGroup
  isLoading: boolean = false

  constructor(
    private message: NzMessageService,
    private router: Router
  ) { 
    this.form = new FormGroup({
      nombres: new FormControl(null, [Validators.required]),
      apellidos: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
      clave: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  registrarse() {
    if(this.form.invalid) {
      this.form.markAllAsTouched()
      this.form.markAsDirty()
      return
    }

    this.isLoading = true

    setTimeout(() => {
      this.isLoading = false
      this.message.success('Registro exitoso.')
      this.router.navigate(['/login'])
    }, 5000)
  }

}
