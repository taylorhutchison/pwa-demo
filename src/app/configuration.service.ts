import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  load() {
    return new Promise<boolean>((res, rej) => {
      res(true);
    });
  }
}
