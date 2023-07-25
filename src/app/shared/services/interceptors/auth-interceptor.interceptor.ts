import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.headers.has('No-Interceptor')) {
      const headers = req.headers.delete('No-Interceptor')
      const newReq = req.clone({
        headers: headers
      })
      return next.handle(newReq);
    }

    const modifiedUrl = `${environment.apiUrl}${req.url}`;
    const token = this.localStorage.getInformation()?.token

    const modifiedReq = req.clone({
      url: modifiedUrl,
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.log('Entro en 401')
          this.router.navigate(['/login']);
          this.localStorage.clear({ key: 'sesion' })
        }
        return throwError(error);
      })
    );
  }
}
