import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from "rxjs/operators";
import { LocalStorageService } from '../local-storage/local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorsService implements HttpInterceptor {

    constructor(
		private storage: LocalStorageService,
	) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.storage.getInformation()?.token;
        const prefix = environment.apiUrl;

        if (!req.headers.has('Content-Type')) {
            if(!req.headers.has('Auto-header')) {
				req = req.clone({
					headers: req.headers.set('Content-Type', 'application/json')
				});
			}
        }

		let separator = ''
		if(req.url.charAt(0) != '/') separator = '/'

        let request = req.clone({
            url: `${prefix}${separator}${req.url}`,
			withCredentials: true,
        });

        if (token) {
            request = this.addToken(request);
		}

        return next.handle(request).pipe(
            shareReplay(),
			map((event) => {
				if (event instanceof HttpResponse) {
					if (!event.body.ok) {
						throw event.body
					}
					event = event.clone({body: event.body});
				}
				return event;
			}),
            catchError((err: any) => {
				if (err.hasOwnProperty('ok') && err.hasOwnProperty('messages')) {
					return throwError(err)
				}

				if (err instanceof ErrorEvent) {
					console.log(err.error.message)
					return throwError({
						ok: false,
						messages: [{text: err.error.message}]
					})
				}

				if (err instanceof HttpErrorResponse) {
					switch (err.status) {
						case 401:
							return this.handle401Error(request, next)

						case 0:
							return throwError({
								ok: false,
								messages: [{text: err.message}]
							})
					}
				}

				return throwError({
					ok: false,
					messages: [{text: err.message}]
				})
            })
        );
    }

    private addToken(request: HttpRequest<any>) {
		let token = this.storage.getInformation().token ?? ''

        return request.clone({
            setHeaders: { 'Authorization': `Bearer ${token}` }
        });
    }

    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
		return throwError('')
		// return this.authService.refreshToken()
		// .pipe(
		// 	switchMap(token => {
		// 		this.authService.updateToken(token)
		// 		return next.handle(this.addToken(request))
		// 	}),
		// 	catchError(() => {
		// 		this.authService.logOut();
		// 		return throwError("Your session has expired");
		// 	})
		// )
    }
}
