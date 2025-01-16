import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service/auth.sevice';

@Injectable ({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    throw new Error('Method not implemented.');
  }

  canActive(): Observable<boolean> {
    return this.authService.getUser().pipe(
      take (1),
    map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    })   
   );
  }
}