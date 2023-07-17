import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const modifiedUrl = `${environment.apiUrl}${req.url}`;

    const modifiedReq = req.clone({
      url: modifiedUrl,
      //headers: req.headers.set('Authorization', 'Bearer YOUR_ACCESS_TOKEN')
    });

    return next.handle(modifiedReq);
  }
}
