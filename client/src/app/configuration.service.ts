import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  config: any;

  constructor() {
    this.config = {
      clientId: 'abc123',
      authority: 'https://login.microsoftonline.com/abc123',
      redirectUri: 'http://localhost',
      postLogoutRedirectUri: 'http://localhost'
    }
  }

  load() {
    return new Promise<boolean>((res, rej) => {
      res(true);
    });
  }
}
