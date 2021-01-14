import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  // tslint:disable-next-line
  private _config: any;

  get config(): any {
    return this._config;
  }

  constructor(private http: HttpClient) { }

  load() {
    return new Promise<boolean>((res, rej) => {
      this.http.get('/api/ConfigurationProviderHttpTrigger')
        .subscribe(response => {
          this._config = response;
          res(true);
        }, () => {
          rej(false);
        })
    });
  }
}
