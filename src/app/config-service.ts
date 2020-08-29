import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  /**
   * GET 通信のサンプル
   *
   * @return GET 通信の結果を持った Promise
   */
  get(): Promise<any> {
    const url = 'outerSrc/conf.json';
    // const url = 'assets/as-conf.json';

    return this.http.get(url).toPromise();
  }
}
