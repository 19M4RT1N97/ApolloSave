import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
    providedIn: 'root'
  })
export class AdminGuard implements CanActivate {

  constructor(protected router: Router, private oauthService: AuthenticationService) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) {
      if (!this.oauthService.isLoggedIn()) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
  }
}