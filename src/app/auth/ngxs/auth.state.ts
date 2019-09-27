import { State, Action, StateContext } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { Login, LoginSuccess, LoginError, SaveTokenLocalStorage, Logout } from './auth.actions';
import { AuthApiService } from 'src/api/auth/auth-api.service';
import { EnabledProgressLinear, DisabledProgressLinear } from 'src/app/shared-ngxs/shared.actions';
import { Navigate } from '@ngxs/router-plugin';
import { LoginRequest } from 'src/api/entities/login-request.entity';
import { UpdateFormValue } from '@ngxs/form-plugin';

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

  constructor(private authApiService: AuthApiService) { }

  @Action(Login)
  login({ dispatch, getState }: StateContext<AuthStateModel>) {
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
        catchError((error) => dispatch(new LoginError(error))));
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
      new DisabledProgressLinear(),
      new Navigate(['master-page/tracking'])
    ]);
  }

  @Action(SaveTokenLocalStorage)
  saveTokenLocalStorage({ getState, setState }: StateContext<AuthStateModel>, payload) {
    const state = getState();

    const token = payload.data.access_token;
    localStorage.setItem('authToken', token);

    setState({
      ...state,
      token: token
    });
  }

  @Action(LoginError)
  loginError({ getState, setState, dispatch }: StateContext<AuthStateModel>, payload) {
    const state = getState();
    dispatch(new DisabledProgressLinear());
    setState({
      ...state,
      loginError: payload.error
    });
  }
}
