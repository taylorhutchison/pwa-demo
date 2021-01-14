import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  config: any;

  constructor() { }

  load() {
    return new Promise<boolean>((res, rej) => {
      this.config = {
        clientId: '',
        authority: ''
      }
      res(true);
    });
  }
}
