import { State, Action, StateContext } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { Login, LoginSuccess, LoginError, SaveTokenLocalStorage, Logout } from './auth.actions';
import { AuthApiService } from 'src/api/auth/auth-api.service';
import { EnabledProgressLinear, DisabledProgressLinear, Redirection } from 'src/app/shared-ngxs/shared.actions';

export interface AuthStateModel {
    userLogged: any;
    loginError: any;
    token: string;
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        userLogged: null,
        loginError: null,
        token: null
    }
})
export class AuthState {

    constructor(private authApiService: AuthApiService) { }

    @Action(Login)
    login({ dispatch }: StateContext<AuthStateModel>, payload) {
        dispatch(new EnabledProgressLinear());
        return this.authApiService.login(payload.loginRequest)
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
        dispatch(new Redirection('login'));
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
            new Redirection('master-page/tracking')
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
