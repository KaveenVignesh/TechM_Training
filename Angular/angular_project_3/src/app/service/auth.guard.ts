import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Inject PLATFORM_ID
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (isPlatformBrowser(this.platformId)) {
      if (this.authService.isLoggedIn()) {
        return true; // Allow access to the route
      } else {
        this.router.navigate(['/login']); // Redirect to the login page
        return false; // Block access to the route
      }
    }
    return false; // Block access in non-browser environments
  }
}
