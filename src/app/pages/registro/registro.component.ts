import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { finalize } from 'rxjs';
import { AutenticacionService } from 'src/app/shared/services/autenticacion/autenticacion.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage/local-storage.service';
import { DatoscompartidosService } from 'src/app/shared/services/servicio-compartido/datoscompartidos.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  form: FormGroup
  isLoading: boolean = false

  user!: SocialUser;
  logged = false;
  loggedIn = false;

  constructor(
    private message: NzMessageService,
    private router: Router,
    private autenticacionService: AutenticacionService,
    private localStorage: LocalStorageService,
    private datosCompartidosServicio: DatoscompartidosService,
    private authService: SocialAuthService,
  ) { 
    this.form = new FormGroup({
      nombres: new FormControl(null, [Validators.required]),
      apellidos: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
      clave: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  registrarse() {
    if(this.form.invalid) {
      this.form.markAllAsTouched()
      this.form.markAsDirty()
      return
    }

    this.isLoading = true

    this.autenticacionService.registrar(this.form.getRawValue())
    .pipe(finalize(() => this.isLoading = false))
    .subscribe(
      (resp: any) => {
        console.log(resp)
        this.localStorage.clear({ key: 'sesion' })

        const mensaje = resp.mensaje
        const sesion = resp
        delete sesion.mensaje
        this.localStorage.setStorage({ key: 'sesion' }, sesion)
        this.message.success(mensaje)


        this.router.navigate(['/plans'])
      },
      (err) => {
        console.log(err)
        this.message.error(err.error.mensaje)
      }
    )
  }

  googleSignup() {
    // console.log("signup with google...")
    // console.log(this.user)
    // console.log(this.logged)
    // this.logged = (this.user != null);

    if (!this.user) {
      // console.log("user is null...")
      return
    }
    this.logged = true;

    this.autenticacionService.registrar_con_google(this.user)
    .pipe(finalize(() => this.isLoading = false))
    .subscribe(
      (resp: any) => {
        // this.isLoading = true
        console.log("exito en registro con google...")
        console.log(resp)
        this.localStorage.clear({ key: 'sesion' })

        const mensaje = resp.mensaje
        const sesion = resp
        delete sesion.mensaje
        this.localStorage.setStorage({ key: 'sesion' }, sesion)
        this.message.success(mensaje)

        //se comparte el email una vez que inica sesion
        // con este email obtengo id del abogado
        // const formValue = this.form.getRawValue() 
        this.datosCompartidosServicio.datoCompartido = this.user.email
        this.datosCompartidosServicio.guardarDatoCompartido(); 

        this.router.navigate(['/plans'])
      },
      (err) => {
        console.log("error en registro con google...")
        console.log(err)
        this.message.error(err.error.mensaje)
      }
    )
  }
}
