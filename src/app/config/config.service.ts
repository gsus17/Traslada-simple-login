import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }

  /** AppKey de la aplicación. */
  private appKey = 'traslada.suppliers';

  /** Grant type. */
  private grantType = 'password';

  /**  Devuelve el appKey de la aplicación. */
  public getAppKey(): string {
    return this.appKey;
  }

  /** Devuelve el grandType para login. */
  public getGrandType(): string {
    return this.grantType;
  }
}
