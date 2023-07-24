import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { NzInputModule } from 'ng-zorro-antd/input';
import { HeaderModule } from "../../shared/components/header/header.module";
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { GoogleSigninButtonModule, SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: LoginComponent }
        ]),
        NzInputModule,
        HeaderModule,
        NzMessageModule,
        ReactiveFormsModule,
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
                onError: (err: any) => {
                    console.error(err);
                }
            } as SocialAuthServiceConfig,
        }
    ]
})
export class LoginModule { }
