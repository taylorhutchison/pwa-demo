import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  configUrl: string = "/api/ConfigurationProviderHttpTrigger";
  // tslint:disable-next-line
  config: Subject<any>;

  constructor(private http: HttpClient) {
    this.config = new Subject<any>();
  }

  load() {
    return new Promise<any>(async (res, rej) => {
      const response = await fetch(this.configUrl);
      this.config.next(response);
      res(response);
    })
  }
}
