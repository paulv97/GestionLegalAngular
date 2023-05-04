import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  googleLogin() {
    console.log("login with google...")
  }
  facebookLogin() {
    console.log("login with facebook...")
  }

  form: FormGroup
  isLoading: boolean = false

  constructor(private message: NzMessageService, private router: Router) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
      password: new FormControl(null, [Validators.required])
    })
  }

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      this.form.markAsDirty()
      return
    }

    this.isLoading = true

    // redirect to the busqueda page
    setTimeout(() => {
      this.isLoading = false
      this.message.success('Login exitoso.')
      this.router.navigate(['/busqueda'])
    }, 5000)
  }

  ngOnInit(): void {
  }

}
