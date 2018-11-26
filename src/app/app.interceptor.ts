import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './auth/login/login.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`${AppInterceptor.name}::intercept request %o`, request);

    const token = this.loginService.getToken();
    request = request.clone({
      setHeaders: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    });
    return next.handle(request);
  }
}
