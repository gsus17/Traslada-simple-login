import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  AuthLoginAction,
  AuthLoginSuccessAction,
  AuthLoginErrorAction,
  AuthLogoutAction
} from './auth.actions';
import { tap, catchError, take } from 'rxjs/operators';
import { AuthStateModel } from './auth.state-model';
import { Navigate } from '@ngxs/router-plugin';
import { AuthApiService } from 'src/api/auth/auth-api.service';
import { ConfigService } from 'src/app/config/config.service';
import { throwError, of } from 'rxjs';
import { ErrorCodes } from 'src/api/entities/error-codes.enum';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginRequest } from 'src/api/entities/login-request.entity';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    credentials: {
      username: null,
      password: null,
      token: null
    },
    user: null,
    form: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {}
    }
  },
})
export class AuthState {

  @Selector()
  static token(state: AuthStateModel) {
    return state.credentials.token;
  }

  constructor(
    private authApiService: AuthApiService,
    private translateService: TranslateService,
    private configService: ConfigService) { }

  @Action(AuthLoginAction)
  authLoginAction({ getState, dispatch }: StateContext<AuthStateModel>) {
    const { form } = getState();

    const loginRequest: LoginRequest = {
      username: form.model.username,
      password: form.model.password,
      client_id: this.configService.getAppKey(),
      grant_type: this.configService.getGrandType(),
      scopes: ''
    };

    return this.authApiService.login(loginRequest)
      .pipe(
        tap((response) => dispatch(new AuthLoginSuccessAction(response))),
        catchError((err) => of(dispatch(new AuthLoginErrorAction(err))))
      );
  }

  @Action(AuthLogoutAction)
  authLogoutAction({ dispatch, patchState }: StateContext<AuthStateModel>) {
    patchState({
      credentials: {
        username: null,
        password: null,
        token: null
      }
    });
    // dispatch([new UpdateFormValue({ value: { user: '', password: '' }, path: 'auth.form' }), new Navigate(['auth/login'])]);
    dispatch(new Navigate(['/login']));
  }

  @Action(AuthLoginSuccessAction)
  authLoginSuccessAction({ getState, patchState, dispatch }: StateContext<AuthStateModel>, payload) {
    const { form } = getState();

    patchState({
      credentials: {
        username: form.model.username,
        password: form.model.password,
        token: payload.response.access_token
      }
    });

    dispatch(new Navigate(['master-page/tracking']));
  }

  @Action(AuthLoginErrorAction)
  authLoginErrorAction(ctx: StateContext<AuthStateModel>, { error }) {

    let messageKey: string = null;

    if (error instanceof HttpErrorResponse) {
      if (error.error.errorCode === ErrorCodes.ErrAuthInvalidCredentials) {
        messageKey = 'LOGIN.ERRORS.CREDENTIALS';
      } else if (error.error.errorCode === ErrorCodes.ErrAuthNoLoginPrivilege) {
        messageKey = 'LOGIN..ERRORS.PRIVILEGES';
      }

      error.error.uiErrorMessage = messageKey ? {
        message: this.translateService.instant(messageKey),
        title: this.translateService.instant('GENERAL.ERROR_TITLE')
      } : undefined;
    }

    return throwError(error);
  }
}
