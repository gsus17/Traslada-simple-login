const FEATURE_KEY: string = '[Auth]';

export class AuthLoginAction {
  static readonly type = `${FEATURE_KEY} Login`;
  constructor() { }
}

export class AuthLoginSuccessAction {
  static readonly type = `${FEATURE_KEY} Login Success`;
  constructor(public response) { }
}

export class AuthLoginErrorAction {
  static readonly type = `${FEATURE_KEY} Login Error`;
  constructor(public error) { }
}

export class AuthLogoutAction {
  static readonly type = `${FEATURE_KEY} Logout`;
}
