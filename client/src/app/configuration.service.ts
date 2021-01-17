import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  authConfigUrl: string = "/api/AuthConfiguration";
  // tslint:disable-next-line
  private _authConfig: any;

  get authConfig(): any {
    return this._authConfig;
  }

  constructor(private http: HttpClient) {
  }

  load() {
    const authConfig = new Promise<any>(async (res, _) => {
      this.http.get(this.authConfigUrl).subscribe(response => {
        this._authConfig = response;
        res(response);
      })
    })
    return Promise.all([authConfig]);
  }
}
