import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  configUrl: string = "/api/ConfigurationProviderHttpTrigger";
  // tslint:disable-next-line
  private _config: any;

  get config(): any {
    return this._config;
  }

  constructor(private http: HttpClient) {
  }

  load() {
    return new Promise<any>(async (res, _) => {
      this.http.get(this.configUrl).subscribe(response => {
        this._config = response;
        res(response);
      })
    })
  }
}
