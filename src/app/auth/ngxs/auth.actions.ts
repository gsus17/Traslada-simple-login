import { LoginRequest } from 'src/api/entities/login-request.entity';
import { JsonWebToken } from 'src/api/entities/json-web-token.entity';

const FEATURE_KEY = '[Auth]';

export class Login {
    static readonly type = `${FEATURE_KEY} login`;
    constructor(public loginRequest: LoginRequest) { }
}

export class Logout {
    static readonly type = `${FEATURE_KEY} logout`;
    constructor() { }
}

export class LoginSuccess {
    static readonly type = `${FEATURE_KEY} login success`;
    constructor(public response) { }
}

export class SaveTokenLocalStorage {
    static readonly type = `${FEATURE_KEY} login save token`;
    constructor(public data: JsonWebToken) { }
}

export class LoginError {
    static readonly type = `${FEATURE_KEY} login error`;
    constructor(public error) { }
}
