import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AutenticacionService } from 'src/app/shared/services/autenticacion/autenticacion.service';
import { finalize } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean;

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
    private localStorage: LocalStorageService,
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService) {
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
        
        this.localStorage.setStorage({ key: 'sesion' }, resp)

        if(resp?.idSuscripcion) {
          this.router.navigate(['/busqueda'])
          return
        }

        // Presenta ventana de suscripcion
        this.router.navigate(['/plans'])
      },
      (err) => {
        console.log(err)
        this.message.error(err.error.mensaje)
      }
    )
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    
    this.socialAuthService.authState.subscribe((user: any) => {
      this.socialUser = user;
      this.isLoggedin = user != null;
      console.log(this.socialUser);
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

}
