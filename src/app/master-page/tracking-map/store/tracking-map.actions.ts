const FEATURE_KEY = '[Tracking]';

export class TrackingGetBasesAction {
  static readonly type = `${FEATURE_KEY} Get Bases`;
  constructor() { }
}
export class TrackingGetBasesSuccesAction {
  static readonly type = `${FEATURE_KEY} Get Bases Success`;
  constructor(public response) { }
}

export class TrackingGetBasesErrorAction {
  static readonly type = `${FEATURE_KEY} Get Bases error`;
  constructor(public error) { }
}

export class TrackingGetPositionsAction {
  static readonly type = `${FEATURE_KEY} Get Positions`;
  constructor() { }
}

export class TrackingGetPositionsSuccessAction {
  static readonly type = `${FEATURE_KEY} Get Positions success`;
  constructor(public response) { }
}

export class TrackingGetPositionsErrorAction {
  static readonly type = `${FEATURE_KEY} Get Positions error`;
  constructor(public error) { }
}
