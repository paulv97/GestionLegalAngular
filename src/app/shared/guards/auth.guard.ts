import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private localStorage: LocalStorageService
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const sesion = this.localStorage.getInformation()
    if(!sesion) {
      return false
    }

    if(!sesion.token) {
      return false
    }

    if(!sesion.idSuscripcion) {
      return false
    }

    return true
  }
  
}
