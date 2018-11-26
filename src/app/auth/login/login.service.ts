import { Injectable } from '@angular/core';
import { Credentials } from './login.interfaces';
import { AuthApiService } from 'src/api/auth/auth-api.service';
import { LoginRequest } from 'src/api/entities/login-request.entity';
import { JsonWebToken } from 'src/api/entities/json-web-token.entity';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token: string;

  constructor(private authApiService: AuthApiService) { }

  /**
   * Auth process.
   */
  public login(credentials: Credentials): Promise<any> {
    console.log(`${LoginService.name}::login`);

    const loginRequest = this.createLoginRequest(credentials);

    const promise: Promise<void> = new Promise((resolve, reject) => {
      this.authApiService.login(loginRequest)
        .then((data: JsonWebToken) => {
          console.log(`${LoginService.name}::data %`, data);
          this.token = data.access_token;
          resolve();
        })
        .catch((err) => {
          console.log(`${LoginService.name}::error %`, err);
          reject(err);
        });
    });

    return promise;
  }

  /**
   * Create a login request object.
   */
  private createLoginRequest(credentials: Credentials): LoginRequest {

    // tslint:disable-next-line:no-unnecessary-local-variable
    const loginRequest: LoginRequest = {
      username: credentials.user,
      password: credentials.password,
      client_id: 'traslada.operators',
      grant_type: 'password',
      scopes: 'null'
    };

    return loginRequest;
  }

  public getToken(): string {
    return this.token;
  }
}
