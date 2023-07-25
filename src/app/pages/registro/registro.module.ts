import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { GoogleSigninButtonModule, SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';


@NgModule({
  declarations: [
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: RegistroComponent },]),
		NzInputModule,
    NzButtonModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    NzMessageService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '799745901147-et6kk71p11554b6fl8mj25cn02nbi6k3.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ]
})
export class RegistroModule { }
