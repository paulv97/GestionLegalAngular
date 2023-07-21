import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private localStorage: LocalStorageService,
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedUrl = `${environment.apiUrl}${req.url}`;
    const token = this.localStorage.getInformation()?.token

    const modifiedReq = req.clone({
      url: modifiedUrl,
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(modifiedReq);
  }
}
