const FEATURE_KEY = '[Shared]';

export class EnabledProgressLinear {
    static readonly type = `${FEATURE_KEY} enable progress linear`;
    constructor() { }
}

export class DisabledProgressLinear {
    static readonly type = `${FEATURE_KEY} disable progress linear`;
    constructor() { }
}

export class Redirection {
    static readonly type = `${FEATURE_KEY} redirection`;
    constructor(public path: string) { }
}
