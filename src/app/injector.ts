import { Injector } from '@angular/core';

export class PortalInjector implements Injector {
  constructor(
    private parentInjector: Injector,
    private customTokens: WeakMap<any, any>
  ) {}

  get(token: any, notFoundValue?: any): any {
    const value = this.customTokens.get(token);

    if (typeof value !== 'undefined') {
      return value;
    }

    return this.parentInjector.get<any>(token, notFoundValue);
  }
}
