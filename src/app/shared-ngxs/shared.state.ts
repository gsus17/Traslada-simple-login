import { State, Action, StateContext } from '@ngxs/store';
import { Router } from '@angular/router';
import { EnabledProgressLinear, DisabledProgressLinear } from './shared.actions';


export interface SharedModel {
    progressLinear: boolean;
    route: string;
}

@State<SharedModel>({
    name: 'shared',
    defaults: {
        progressLinear: false,
        route: 'login'
    }
})
export class SharedState {

    constructor() { }

    @Action(EnabledProgressLinear)
    enabledProgressLinear({ setState, getState }: StateContext<SharedModel>, payload) {
        const state = getState();

        setState({
            ...state,
            progressLinear: true
        });
    }

    @Action(DisabledProgressLinear)
    disabledProgressLinear({ setState, getState }: StateContext<SharedModel>, payload) {
        const state = getState();

        setState({
            ...state,
            progressLinear: false
        });
    }
}
