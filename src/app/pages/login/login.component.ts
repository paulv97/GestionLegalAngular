import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AutenticacionService } from 'src/app/shared/services/autenticacion/autenticacion.service';
import { finalize } from 'rxjs';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { DatoscompartidosService } from 'src/app/shared/services/servicio-compartido/datoscompartidos.service';import { LoginService } from 'src/app/shared/services/login/login.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  private accessToken = '';
  user!: SocialUser;
  logged = false;
  loggedIn = false;

  form: FormGroup
  isLoading: boolean = false

  constructor(
    private message: NzMessageService, 
    private router: Router,
    private autenticacionService: AutenticacionService,
    private localStorage: LocalStorageService,
    private datosCompartidosServicio: DatoscompartidosService,
    private authService: SocialAuthService,
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

  googleLogin() {
    // console.log("login with google...")
    // console.log(this.user)
    // console.log(this.logged)

    if (!this.user) {
      // console.log("user is null...")
      return
    }
    this.logged = true

    this.autenticacionService.loginGoogle(this.user.email)
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (resp: any) => {
          // this.isLoading = true

          console.log("success login with google...")

          console.log(resp)

          this.localStorage.setStorage({ key: 'sesion' }, resp)

          //se comparte el email una vez que inica sesion
          // con este email obtengo id del abogado 
          this.datosCompartidosServicio.datoCompartido = this.user.email;
          this.datosCompartidosServicio.guardarDatoCompartido();

          if (resp?.idSuscripcion) {
            this.router.navigate(['/busqueda'])
            return
          }

          // Presenta ventana de suscripcion
          this.router.navigate(['/plans'])
        },
        (err) => {
          console.log("error login with google...")
          console.log(err)
          this.message.error(err.error.mensaje)
        }
      )
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log("user changed...")
      console.log(user.email)
    });
  }

  // loginWithGoogle(): void {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // logOut(): void {
  //   this.socialAuthService.signOut();
  // }

  // refreshToken(): void {
  //   this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  // }

  // getAccessToken(): void {
  //   this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
  // }
}
