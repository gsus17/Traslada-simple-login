import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from './login/store/auth.state';
import { AppHelperService } from '../app-helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store,
    private appHelper: AppHelperService,
    private router: Router) { }
  canActivate(): boolean | Promise<boolean> {
    const token = this.store.selectSnapshot(AuthState.token);
    const isAuthorized: boolean = this.appHelper.isValidToken(token);
    return isAuthorized ? isAuthorized : this.router.navigate(['/auth/login']);
  }
}
