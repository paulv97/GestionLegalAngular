import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AutenticacionService } from 'src/app/shared/services/autenticacion/autenticacion.service';
import { finalize } from 'rxjs';


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

  constructor(
    private message: NzMessageService, 
    private router: Router,
    private autenticacionService: AutenticacionService,
  ) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
      password: new FormControl(null, [Validators.required])
    })
  }

  login() {
    if(this.form.invalid) {
      this.form.markAllAsTouched()
      this.form.markAsDirty()
      return
    }

    this.isLoading = true

    const formValue = this.form.getRawValue()
    this.autenticacionService.login(formValue.email, formValue.password)
    .pipe(finalize(() => this.isLoading = false))
    .subscribe(
      (resp: any) => {
        console.log(resp)
        this.message.success(resp.mensaje)
        this.router.navigate(['/busqueda'])
      },
      (err) => {
        console.log(err)
        this.message.error(err.error.mensaje)
      }
    )
  }

  ngOnInit(): void {
  }

}
