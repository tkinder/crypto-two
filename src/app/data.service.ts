import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root',
})
export class DataService {
  result: any;

  constructor(private _http: HttpClient) {}


  getPrices() {
    return this._http
      .get(
        'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,SOL,ADA,XRP,DOT,DOGE&tsyms=USD&api_key=24bd80c24960d3cf31733291331a298ae53520fc2bfdb3910451fbf0cf021902'
      )
      .pipe(map((result: any) => (this.result = result)));
  }
}

