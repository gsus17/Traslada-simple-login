import { JsonWebToken } from 'src/api/entities/json-web-token.entity';

const FEATURE_KEY = '[Auth]';

export class LoginAction {
    static readonly type = `${FEATURE_KEY} login`;
    constructor() { }
}

export class Logout {
    static readonly type = `${FEATURE_KEY} logout`;
    constructor() { }
}

export class AuthLoginSuccessAction {
    static readonly type = `${FEATURE_KEY} login success`;
    constructor(public response) { }
}

export class SaveTokenLocalStorage {
    static readonly type = `${FEATURE_KEY} login save token`;
    constructor(public data: JsonWebToken) { }
}

export class AuthLoginErrorAction {
    static readonly type = `${FEATURE_KEY} login error`;
    constructor(public error) { }
}
