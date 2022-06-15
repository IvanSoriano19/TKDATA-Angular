import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authSvc: AuthService, private router: Router) { }



  canActivate(): Observable<boolean> {
    this.authSvc.authenticated().subscribe(bool => {
      if (bool) {
        return this.authSvc.authenticated();
      } else {
        this.router.navigate(['/login']);
        return this.authSvc.authenticated();
      }
    });

    return this.authSvc.authenticated();

  }


}
