import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  form: FormGroup

  constructor(
  ) { 
    this.form = new FormGroup({
      nombres: new FormControl(null),
      apellidos: new FormControl(null),
      email: new FormControl(null),
      clave: new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

}
