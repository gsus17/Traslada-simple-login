import { State, Action, StateContext } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { LoginAction, LoginSuccess, LoginError, SaveTokenLocalStorage, Logout } from './auth.actions';
import { AuthApiService } from 'src/api/auth/auth-api.service';
import { EnabledProgressLinear, DisabledProgressLinear } from 'src/app/shared-ngxs/shared.actions';
import { Navigate } from '@ngxs/router-plugin';
import { LoginRequest } from 'src/api/entities/login-request.entity';
import { UpdateFormValue } from '@ngxs/form-plugin';
import { ErrorCodes } from 'src/api/entities/error-codes.enum';
import { ErrorMessage } from 'src/api/entities/error-message.entity';
import { TranslateService } from '@ngx-translate/core';
import { throwError, of } from 'rxjs';
import { ErrorHelperService } from 'src/app/error-handler/error-helper.service';

export interface AuthStateModel {
  userLogged: any;
  loginError: any;
  token: string;
  authForm: any;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    userLogged: null,
    loginError: null,
    token: null,
    authForm: {
      model: undefined,
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
export class AuthState {

  constructor(
    private authApiService: AuthApiService,
    private translateService: TranslateService,
    private errorHelperService: ErrorHelperService) { }

  @Action(LoginAction)
  loginAction({ dispatch, getState }: StateContext<AuthStateModel>) {
    const state = getState();
    dispatch(new EnabledProgressLinear());

    const loginRequest: LoginRequest = {
      username: state.authForm.model.user,
      password: state.authForm.model.password,
      client_id: 'traslada.operators',
      grant_type: 'password',
      scopes: 'null'
    };

    return this.authApiService.login(loginRequest)
      .pipe(
        tap((response) => dispatch(new LoginSuccess(response))),
        catchError((error) => {
          dispatch(new DisabledProgressLinear());
          let messageKey: string = null;
          let titleKey: string = null;
          const objectType: string = 'object';

          if (objectType === typeof error) {
            if (error.error.errorCode === ErrorCodes.ErrAuthInvalidCredentials) {
              messageKey = 'AUTH.CREDENTIALS_INVALID';
              titleKey = 'AUTH.ERROR';
            } else if (error.errorCode === ErrorCodes.ErrAuthNoLoginPrivilege) {
              messageKey = 'AUTH.CREDENTIALS_INVALID';
              titleKey = 'AUTH.ERROR';
            }
          }

          const errorMessage: ErrorMessage = messageKey ? {
            message: this.translateService.instant(messageKey),
            title: this.translateService.instant(titleKey)
          } : null;

          return !errorMessage ? throwError(error) : throwError(errorMessage);
        }));
  }

  @Action(Logout)
  logout({ setState, getState, dispatch }: StateContext<AuthStateModel>, payload) {
    setState({
      ...getState(),
      token: null
    });
    dispatch([new Navigate(['/login']), new UpdateFormValue({ value: { user: '', password: '' }, path: 'auth.authForm' })]);
    localStorage.removeItem('authToken');
  }

  @Action(LoginSuccess)
  loginSuccess({ getState, setState, dispatch }: StateContext<AuthStateModel>, payload) {
    const state = getState();

    setState({
      ...state,
      userLogged: payload.response
    });
    dispatch([
      new SaveTokenLocalStorage(payload.response.access_token),
      new DisabledProgressLinear(),
      new Navigate(['master-page/tracking'])
    ]);
  }

  @Action(SaveTokenLocalStorage)
  saveTokenLocalStorage({ getState, setState }: StateContext<AuthStateModel>, payload) {
    const state = getState();

    const token = payload.data;
    localStorage.setItem('authToken', token);

    setState({
      ...state,
      token: token
    });
  }

  @Action(LoginError)
  loginError({ getState, setState, dispatch }: StateContext<AuthStateModel>, { error }) {

  }
}
