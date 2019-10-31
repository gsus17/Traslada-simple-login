import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthState } from './login/store/auth.state';
import { AppHelperService } from '../app-helper.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private store: Store,
    private appHelper: AppHelperService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isFileRequest: boolean = /(\.html?|\.js|\.svg|\.json|\/connect\/userinfo)/i.test(req.url);
    const hasAuthorizationHeader: boolean = typeof req.headers === 'object' && req.headers.has('Authorization') !== undefined;

    if (!isFileRequest && !hasAuthorizationHeader) {
      const token = this.store.selectSnapshot(AuthState.token);
      if (this.appHelper.isValidToken(token)) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      } else {
        // return this.router.navigate(['auth/login']);
      }
    }

    return next.handle(req);
  }


}
