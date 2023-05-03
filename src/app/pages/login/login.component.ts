import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  email: string = "";
  password: string = "";

  probar() {
    console.log("hola")

    // window.location.href = "src/pages/app/paginas/index.html"
  }

  ngOnInit(): void {
  }

}
