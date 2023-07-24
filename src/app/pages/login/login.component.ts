import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
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

  constructor(private message: NzMessageService, private router: Router, private loginService: LoginService, private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService) {
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

    // redirect to busqueda
    this.loginService.checkLogin(this.form.value.email, this.form.value.password).subscribe(
      (res: any) => {
        console.log("res")
        console.log(res)
        // if (res.length > 0) {
        if (res.status == 200) {
          this.isLoading = false
          this.message.success('Login exitoso.')
          this.router.navigate(['/busqueda'])
        } else {
          this.isLoading = false
          this.message.error('Usuario o contraseña incorrectos.')
        }
      },
      (err: any) => {
        console.log(err)
        this.isLoading = false
        this.message.error('Error al iniciar sesión.')
      }
    )
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    
    this.socialAuthService.authState.subscribe((user) => {
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
